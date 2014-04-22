/**
 * Horatio Visitor
 */
Horatio.Visitor = function() {};

Horatio.Visitor.prototype = {
  
  /**
   * Program
   */
  visitProgram: function(program, arg) {    
    var self = this;
    
    // comment
    program.comment.visit(this, null);
    
    // declarations
    if (program.declarations.length > 0) {
      program.declarations.forEach(function(declaration) {
        declaration.visit(self, null);
      });
    } else {
      throw new Error("Semantic Error - No characters declared.");
    }
    
    // parts
    if (program.parts.length > 0) {
      program.parts.forEach(function(part) {
        part.visit(self, null);
      });
    } else {
      throw new Error("Semantic Error - No parts in program.");
    }
    
    return null;
  },
  
  
  
  /**
   * Comment
   */
  visitComment: function(comment, arg) {
    if (comment.sequence) {
      return null;
    } else {
      throw new Error("Semantic Error - Comment malformed.");
    }
  },
  
  
  
  /**
   * Declaration
   */
  visitDeclaration: function(declaration, arg) {
    var c = declaration.character.visit(this, arg);
    
    if (this.characters[c.sequence]) {
      throw new Error("Semantic Error - Character already defined.");
    } else {
      this.characters[c.sequence] = {
        on_stage: false,
        value_depth: 0
      };
    }
    
    declaration.comment.visit(this, arg);
    return null;
  },
  
  
  
  /**
   * Character
   */
  visitCharacter: function(character, arg) {
    var self = this;
    
    if (!character.sequence) {
      throw new Error("Semantic Error - Character undefined.");
    }
    
    if (!(character instanceof Horatio.AST.Character)) {
      throw new Error("Semantic Error - Not of type Character.");
    }
    
    // Declared flag
    if (arg && arg.declared === true && !this.declared(character.sequence)) {
      throw new Error("Semantic Error - Character Undeclared");
    }
    
    // Present on stage flag
    if (arg && arg.hasOwnProperty('on_stage')) {
      switch (arg.on_stage) {
      case true:
        if (!this.onStage(character.sequence)) {
          throw new Error("Semantic Error - Character not on stage.");
        }
        break;
      
      case false:
        if (this.onStage(character.sequence)) {
          throw new Error("Semantic Error - Character already on stage.");
        }
        break;
      }
    }
    
    return character;
  },
  
  
  
  /**
   * Part
   */
  visitPart: function(part, arg) {
    var self = this;
    
    part.numeral.visit(this, arg);
    part.comment.visit(this, arg);
    
    if (part.subparts.length > 0) {
      part.subparts.forEach(function(subpart) {
        subpart.visit(self, arg);
      });
    } else {
      throw new Error("Semantic Error - No subparts defined.");
    }
    
    return null;
  },
  
  
  
  /**
   * Numeral
   */
  visitNumeral: function(numeral, arg) {
    if (numeral.sequence) {
      return null;
    } else {
      throw new Error("Semantic Error - Numeral malformed.");
    }
  },
  
  
  
  /**
   * Subparts
   */
  visitSubpart: function(subpart, arg) {
    subpart.numeral.visit(this, arg);
    subpart.comment.visit(this, arg);
    subpart.stage.visit(this, arg);
    return null;
  },
  
  
  
  /**
   * Stage
   */
  visitStage: function(stage, arg) {
    if (stage.start_presence) stage.start_presence.visit(this, arg);
    if (stage.end_presence) stage.end_presence.visit(this, arg);
    if (stage.dialogue) stage.dialogue.visit(this, arg);
    return null;
  },
  
  
  
  /**
   * Enter
   */
  visitEnter: function(presence, arg) {
    
    if (!presence.character_1 && !presence.character_2) {
      throw new Error("Semantic Error - No characters entering.");
    }
    
    var c1 = presence.character_1.visit(this, {declared: true, on_stage: false});  
    this.toggleStage(c1.sequence);

    if (presence.character_2) {
      var c2 = presence.character_2.visit(this, {declared: true, on_stage: false});
      
      if (c1.sequence === c2.sequence) {
        throw new Error("Semantic Error - Same character entering twice in same statement.");
      }
      
      this.toggleStage(c2.sequence);
    }
    
    return null;
  },
  
  
  
  /**
   * Exit
   */
  visitExit: function(presence, arg) {
    if (!presence.character) {
      throw new Error("Semantic Error - No character exiting.");
    }
    
    var c = presence.character.visit(this, {declared: true, on_stage: true});
    this.toggleStage(c.sequence);
    
    return null;
  },
  
  
  
  /**
   * Exeunt
   */
  visitExeunt: function(presence, arg) {
    // - No characters on stage
    // x Only 1 character exeunting
    // x characters are the same
    
    if (presence.character_1 ? !presence.character_2 : presence.character_2) {
      throw new Error("Semantic Error - Either 2 or no characters can be defined, not one.");
    }
    
    if (presence.character_1 && presence.character_2) {
      var c1 = presence.character_1.visit(this, {declared: true, on_stage: true});
      var c2 = presence.character_2.visit(this, {declared: true, on_stage: true});
      
      if (c1.sequence === c2.sequence) {
        throw new Error("Semantic Error - Characters are the same.");
      }
      
      this.toggleStage(c1.sequence);
      this.toggleStage(c2.sequence);
      
    } else {
      this.exeuntStage();  
    }
    
    return null;
  },
  
  
  
  /**
   * Dialogue
   */
  visitDialogue: function(dialogue, arg) {
    var self = this;
    dialogue.lines.forEach(function(line) {
      line.visit(self, arg);
    });
    return null;
  },
  
  
  
  /**
   * Line
   */
  visitLine: function(line, arg) {
    var self = this;
    
    var c = line.character.visit(this, {declared: true, on_stage: true});
    
    if (line.sentences.length === 0) {
      throw new Error("Semantic Error - Line cannot have no sentences.");
    } else {
      line.sentences.forEach(function(sentence) {
        sentence.visit(self, arg);
      });
    }
    
    return null;
  }
  
};