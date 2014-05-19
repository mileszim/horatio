/**
 * Horatio Semantics Visitor
 */
Horatio.Semantics = function() {};

Horatio.Semantics.prototype = {
  
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
      this.characters[c.sequence] = false;
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
    
    var n = part.numeral.visit(this, arg);
    part.comment.visit(this, arg);
    
    if (this.parts[n]) {
      throw new Error("Semantic Error - Act already defined.");
    } else
    if (part.subparts.length === 0) {
      throw new Error("Semantic Error - No subparts defined.");
    } else {
      this.parts[n] = [];
      part.subparts.forEach(function(subpart) {
        subpart.visit(self, {act: n});
      });
    }
    
    return null;
  },
  
  
  
  /**
   * Numeral
   */
  visitNumeral: function(numeral, arg) {
    if (numeral.sequence) {
      return numeral.sequence;
    } else {
      throw new Error("Semantic Error - Numeral malformed.");
    }
    return null;
  },
  
  
  
  /**
   * Subparts
   */
  visitSubpart: function(subpart, arg) {
    var n = subpart.numeral.visit(this, arg);
    
    if (this.sceneExists(arg.act, n)) {
      throw new Error("Semantic Error - Scene already defined.");
    } else {
      this.parts[arg.act].push(n);
      subpart.comment.visit(this, arg);
      subpart.stage.visit(this, {act: arg.act, scene: n});
    }
    
    return null;
  },
  
  
  
  /**
   * Stage
   */
  visitStage: function(stage, arg) {
    if (stage.start_presence) stage.start_presence.visit(this, arg);
    if (stage.dialogue) stage.dialogue.visit(this, arg);
    if (stage.end_presence) stage.end_presence.visit(this, arg);
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
      arg.character = c.sequence;
      line.sentences.forEach(function(sentence) {
        sentence.visit(self, arg);
      });
    }
    
    return null;
  },
  
  
  
  /**
   * Goto
   */
  visitGoto: function(goto, arg) {
    var n = goto.numeral.visit(this, arg);
    
    if (!this.sceneExists(arg.act, arg.scene)) {
      throw new Error("Semantic Error - Scene specified by Goto does not exist in this act.");
    }
    
    return null;
  },
  
  
  
  /**
   * Assignment Sentence
   */
  visitAssignmentSentence: function(assignment, arg) {
    assignment.be.visit(this, arg);
    assignment.value.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Question Sentence
   */
  visitQuestionSentence: function(question, arg) {
    question.be.visit(this, arg);
    question.comparison.visit(this, arg);
    question.value.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Response Sentence
   */
  visitResponseSentence: function(response, arg) {
    response.goto.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Goto Sentence
   */
  visitGotoSentence: function(goto, arg) {
    goto.goto.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Integer Input Sentence
   */
  visitIntegerInputSentence: function(integer_input, arg) {
    
    return null;
  },
  
  
  
  /**
   * Char Input Sentence
   */
  visitCharInputSentence: function(char_input, arg) {
    
    return null;
  },
  
  
  
  /**
   * Integer Output Sentence
   */
  visitIntegerOutputSentence: function(integer_output, arg) {
    
    return null;
  },
  
  
  
  /**
   * Char Output Sentence
   */
  visitCharOutputSentence: function(char_output, arg) {
    
    return null;
  },
  
  
  
  /**
   * Remember Sentence
   */
  visitRememberSentence: function(remember, arg) {
    var p = remember.pronoun.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Recall Sentence
   */
  visitRecallSentence: function(recall, arg) {
    recall.comment.visit(this, arg);
  },
  
  
  
  /**
   * Positive Constant Value
   */
  visitPositiveConstantValue: function(pc_val, arg) {
    var self = this;
    
    var n;    
    if (!(pc_val.noun instanceof Horatio.AST.PositiveNoun) && !(pc_val.noun instanceof Horatio.AST.NeutralNoun)) {
      throw new Error("Semantic Error - Positive Constants must use a positive or neutral noun");
    } else {
      n = pc_val.noun.visit(this, arg);
    }
    pc_val.noun.visit(this, arg);
    pc_val.adjectives.forEach(function(adjective) {
      if (!(adjective instanceof Horatio.AST.PositiveAdjective) && !(adjective instanceof Horatio.AST.NeutralAdjective)) {
        throw new Error("Semantic Error - Positive Constants must use positive of neutral adjectives.");
      } else {
        adjective.visit(this, arg);
      }
    });
    
    //return Math.pow(2, pc_val.adjectives.length);
    return 0; // placeholder
  },
  
  
  
  /**
   * Negative Constant Value
   */
  visitNegativeConstantValue: function(nc_val, arg) {
    var self = this;
    
    var n;
    if (!(nc_val.noun instanceof Horatio.AST.NegativeNoun) && !(nc_val.noun instanceof Horatio.AST.NeutralNoun)) {
      throw new Error("Semantic Error - Negative Constants must use a negative or neutral noun");
    } else {
      n = nc_val.noun.visit(this, arg);
    }
    nc_val.noun.visit(this, arg);
    nc_val.adjectives.forEach(function(adjective) {
      if (!(adjective instanceof Horatio.AST.NegativeAdjective) && !(adjective instanceof Horatio.AST.NeutralAdjective)) {
        throw new Error("Semantic Error - Negative Constants must use negative of neutral adjectives.");
      } else {
        adjective.visit(this, arg);
      }
    });
    
    //return (-1 * Math.pow(2, nc_val.adjectives.length));
    return 0; // placeholder
  },
  
  
  
  /**
   * Unary Operation Value
   */
  visitUnaryOperationValue: function(unary, arg) {
    var o = unary.operator.visit(this, arg);
    var v = unary.value.visit(this, arg);
    
    return 0; // placeholder
  },
  
  
  
  /**
   * Arithmetic Operation Value
   */
  visitArithmeticOperationValue: function(arithmetic, arg) {
    var o = arithmetic.operator.visit(this, arg);
    var v1 = arithmetic.value_1.visit(this, arg);
    var v2 = arithmetic.value_2.visit(this, arg);
    
    return 0; //placeholder
  },
  
  
  
  /**
   * Pronoun Value
   */
  visitPronounValue: function(pronoun, arg) {
    var p = pronoun.pronoun.visit(this, arg);
    
    return p;
  },
  
  
  
  /**
   * Greater Than Comparison
   */
  visitGreaterThanComparison: function(comparison, arg) {
    var c = comparison.comparative.visit(this, arg);
    
    return c;
  },
  
  
  
  /**
   * Lesser Than Comparison
   */
  visitLesserThanComparison: function(comparison, arg) {
    var c = comparison.comparative.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Equal To Comparison
   */
  visitEqualToComparison: function(comparison, arg) {
    comparison.adjective.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Inverse Comparison
   */
  visitInverseComparison: function(comparison, arg) {
    var c = comparison.comparison.visit(this, arg);
    
    return c;
  },
  
  
  
  /**
   * First Person Pronoun
   */
  visitFirstPersonPronoun: function(fpp, arg) {
    
    return null;
  },
  
  
  
  /**
   * Second Person Pronoun
   */
  visitSecondPersonPronoun: function(spp, arg) {
    
    return null;
  },
  
  
  
  /**
   * Positive Noun
   */
  visitPositiveNoun: function(noun, arg) {
    
    return null;
  },
  
  
  
  /**
   * Neutral Noun
   */
  visitNeutralNoun: function(noun, arg) {
    
    return null;
  },
  
  
  
  /**
   * Negative Noun
   */
  visitNegativeNoun: function(noun, arg) {
    
    return null;
  },
  
  
  
  /**
   * Positive Adjective
   */
  visitPositiveAdjective: function(adjective, arg) {
    
    return null;
  },
  
  
  
  /**
   * Neutral Adjective
   */
  visitNeutralAdjective: function(adjective, arg) {
    
    return null;
  },
  
  
  
  /**
   * Negative Adjective
   */
  visitNegativeAdjective: function(adjective, arg) {
    
    return null;
  },
  
  
  
  /**
   * Unary Operator
   */
  visitUnaryOperator: function(operator, arg) {
    
    return null;
  },
  
  
  
  /**
   * Arithmetic Operator
   */
  visitArithmeticOperator: function(operator, arg) {
    
    return null;
  },
  
  
  
  /**
   * Positive Comparative
   */
  visitPositiveComparative: function(comparative, arg) {
    
    return null;
  },
  
  
  
  /**
   * Negative Comparative
   */
  visitNegativeComparative: function(comparative, arg) {
    
    return null;
  },
  
  
  
  /**
   * Be
   */
  visitBe: function(be, arg) {
    if (be.sequence==="You are" || be.sequence==="Thou art") {
      if (this.solo(arg.character)) {
        console.log("solo");
        throw new Error("Semantic Error - Cannot assign value to interlocutor, only 1 character is on stage.");
      }
    }
    
    return null;
  },
  
  
  
  /**
   * Be Comparative
   */
  visitBeComparative: function(be, arg) {
    if (be.sequence==="Are you" || be.sequence==="Art thou") {
      if (this.solo(arg.character))
        throw new Error("Semantic Error - Cannot compare value of interlocutor, only 1 character is on stage.");
    }
    
    return null;
  }
  
};