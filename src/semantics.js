import AST from './ast';

/**
 * Horatio Semantics Visitor
 */
export default class Semantics {

  /**
   * Program
   */
  visitProgram(program, arg) {
    let self = this;

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
  }



  /**
   * Comment
   */
  visitComment(comment, arg) {
    if (comment.sequence) {
      return null;
    } else {
      throw new Error("Semantic Error - Comment malformed.");
    }
  }



  /**
   * Declaration
   */
  visitDeclaration(declaration, arg) {
    let c = declaration.character.visit(this, arg);

    if (this.characters[c.sequence]) {
      throw new Error("Semantic Error - Character already defined.");
    } else {
      this.characters[c.sequence] = false;
    }

    declaration.comment.visit(this, arg);
    return null;
  }



  /**
   * Character
   */
  visitCharacter(character, arg) {
    let self = this;

    if (!character.sequence) {
      throw new Error("Semantic Error - Character undefined.");
    }

    if (!(character instanceof AST.Character)) {
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
  }



  /**
   * Part
   */
  visitPart(part, arg) {
    let self = this;

    let n = part.numeral.visit(this, arg);
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
  }



  /**
   * Numeral
   */
  visitNumeral(numeral, arg) {
    if (numeral.sequence) {
      return numeral.sequence;
    } else {
      throw new Error("Semantic Error - Numeral malformed.");
    }
    return null;
  }



  /**
   * Subparts
   */
  visitSubpart(subpart, arg) {
    let n = subpart.numeral.visit(this, arg);

    if (this.sceneExists(arg.act, n)) {
      throw new Error("Semantic Error - Scene already defined.");
    } else {
      this.parts[arg.act].push(n);
      subpart.comment.visit(this, arg);
      subpart.stage.visit(this, {act: arg.act, scene: n});
    }

    return null;
  }



  /**
   * Stage
   */
  visitStage(stage, arg) {
    if (stage.start_presence) stage.start_presence.visit(this, arg);
    if (stage.dialogue) stage.dialogue.visit(this, arg);
    if (stage.end_presence) stage.end_presence.visit(this, arg);
    return null;
  }



  /**
   * Enter
   */
  visitEnter(presence, arg) {
    if (!presence.character_1 && !presence.character_2) {
      throw new Error("Semantic Error - No characters entering.");
    }

    let c1 = presence.character_1.visit(this, {declared: true, on_stage: false});
    this.toggleStage(c1.sequence);

    if (presence.character_2) {
      let c2 = presence.character_2.visit(this, {declared: true, on_stage: false});

      if (c1.sequence === c2.sequence) {
        throw new Error("Semantic Error - Same character entering twice in same statement.");
      }

      this.toggleStage(c2.sequence);
    }

    return null;
  }



  /**
   * Exit
   */
  visitExit(presence, arg) {
    if (!presence.character) {
      throw new Error("Semantic Error - No character exiting.");
    }

    let c = presence.character.visit(this, {declared: true, on_stage: true});
    this.toggleStage(c.sequence);

    return null;
  }



  /**
   * Exeunt
   */
  visitExeunt(presence, arg) {
    // - No characters on stage
    // x Only 1 character exeunting
    // x characters are the same

    if (presence.character_1 ? !presence.character_2 : presence.character_2) {
      throw new Error("Semantic Error - Either 2 or no characters can be defined, not one.");
    }

    if (presence.character_1 && presence.character_2) {
      let c1 = presence.character_1.visit(this, {declared: true, on_stage: true});
      let c2 = presence.character_2.visit(this, {declared: true, on_stage: true});

      if (c1.sequence === c2.sequence) {
        throw new Error("Semantic Error - Characters are the same.");
      }

      this.toggleStage(c1.sequence);
      this.toggleStage(c2.sequence);

    } else {
      this.exeuntStage();
    }

    return null;
  }



  /**
   * Dialogue
   */
  visitDialogue(dialogue, arg) {
    let self = this;
    dialogue.lines.forEach(function(line) {
      line.visit(self, arg);
    });
    return null;
  }



  /**
   * Line
   */
  visitLine(line, arg) {
    let self = this;

    let c = line.character.visit(this, {declared: true, on_stage: true});

    if (line.sentences.length === 0) {
      throw new Error("Semantic Error - Line cannot have no sentences.");
    } else {
      arg.character = c.sequence;
      line.sentences.forEach(function(sentence) {
        sentence.visit(self, arg);
      });
    }

    return null;
  }



  /**
   * Goto
   */
  visitGoto(goto, arg) {
    let n = goto.numeral.visit(this, arg);

    if (!this.sceneExists(arg.act, arg.scene)) {
      throw new Error("Semantic Error - Scene specified by Goto does not exist in this act.");
    }

    return null;
  }



  /**
   * Assignment Sentence
   */
  visitAssignmentSentence(assignment, arg) {
    assignment.be.visit(this, arg);

    assignment.value.visit(this, arg);

    return null;
  }



  /**
   * Question Sentence
   */
  visitQuestionSentence(question, arg) {
    question.be.visit(this, arg);
    question.comparison.visit(this, arg);
    question.value.visit(this, arg);

    return null;
  }



  /**
   * Response Sentence
   */
  visitResponseSentence(response, arg) {
    response.goto.visit(this, arg);

    return null;
  }



  /**
   * Goto Sentence
   */
  visitGotoSentence(goto, arg) {
    goto.goto.visit(this, arg);

    return null;
  }



  /**
   * Integer Input Sentence
   */
  visitIntegerInputSentence(integer_input, arg) {
    if (this.solo(arg.character)) {
      throw new Error("Semantic Error - Input calls require two characters on stage.");
    }
    return null;
  }



  /**
   * Char Input Sentence
   */
  visitCharInputSentence(char_input, arg) {
    if (this.solo(arg.character)) {
      throw new Error("Semantic Error - Input calls require two characters on stage.");
    }
    return null;
  }



  /**
   * Integer Output Sentence
   */
  visitIntegerOutputSentence(integer_output, arg) {
    if (this.solo(arg.character)) {
      throw new Error("Semantic Error - Output calls require two characters on stage.");
    }
    return null;
  }



  /**
   * Char Output Sentence
   */
  visitCharOutputSentence(char_output, arg) {
    if (this.solo(arg.character)) {
      throw new Error("Semantic Error - Output calls require two characters on stage.");
    }
    return null;
  }



  /**
   * Remember Sentence
   */
  visitRememberSentence(remember, arg) {
    let p = remember.pronoun.visit(this, arg);

    return null;
  }



  /**
   * Recall Sentence
   */
  visitRecallSentence(recall, arg) {
    recall.comment.visit(this, arg);
  }



  /**
   * Positive Constant Value
   */
  visitPositiveConstantValue(pc_val, arg) {
    let self = this;

    let n;
    if (!(pc_val.noun instanceof AST.PositiveNoun) && !(pc_val.noun instanceof AST.NeutralNoun)) {
      throw new Error("Semantic Error - Positive Constants must use a positive or neutral noun");
    } else {
      n = pc_val.noun.visit(self, arg);
    }
    pc_val.noun.visit(this, arg);
    pc_val.adjectives.forEach(function(adjective) {
      if (!(adjective instanceof AST.PositiveAdjective) && !(adjective instanceof AST.NeutralAdjective)) {
        throw new Error("Semantic Error - Positive Constants must use positive of neutral adjectives.");
      } else {
        adjective.visit(self, arg);
      }
    });

    //return Math.pow(2, pc_val.adjectives.length);
    return 0; // placeholder
  }



  /**
   * Negative Constant Value
   */
  visitNegativeConstantValue(nc_val, arg) {
    let self = this;

    let n;
    if (!(nc_val.noun instanceof AST.NegativeNoun) && !(nc_val.noun instanceof AST.NeutralNoun)) {
      throw new Error("Semantic Error - Negative Constants must use a negative or neutral noun");
    } else {
      n = nc_val.noun.visit(self, arg);
    }
    nc_val.noun.visit(this, arg);
    nc_val.adjectives.forEach(function(adjective) {
      if (!(adjective instanceof AST.NegativeAdjective) && !(adjective instanceof AST.NeutralAdjective)) {
        throw new Error("Semantic Error - Negative Constants must use negative of neutral adjectives.");
      } else {
        adjective.visit(self, arg);
      }
    });

    //return (-1 * Math.pow(2, nc_val.adjectives.length));
    return 0; // placeholder
  }



  /**
   * Unary Operation Value
   */
  visitUnaryOperationValue(unary, arg) {
    let o = unary.operator.visit(this, arg);
    let v = unary.value.visit(this, arg);

    return 0; // placeholder
  }



  /**
   * Arithmetic Operation Value
   */
  visitArithmeticOperationValue(arithmetic, arg) {
    let o = arithmetic.operator.visit(this, arg);
    let v1 = arithmetic.value_1.visit(this, arg);
    let v2 = arithmetic.value_2.visit(this, arg);

    return 0; //placeholder
  }



  /**
   * Pronoun Value
   */
  visitPronounValue(pronoun, arg) {
    let p = pronoun.pronoun.visit(this, arg);

    return p;
  }



  /**
   * Greater Than Comparison
   */
  visitGreaterThanComparison(comparison, arg) {
    let c = comparison.comparative.visit(this, arg);

    return c;
  }



  /**
   * Lesser Than Comparison
   */
  visitLesserThanComparison(comparison, arg) {
    let c = comparison.comparative.visit(this, arg);

    return null;
  }



  /**
   * Equal To Comparison
   */
  visitEqualToComparison(comparison, arg) {
    comparison.adjective.visit(this, arg);

    return null;
  }



  /**
   * Inverse Comparison
   */
  visitInverseComparison(comparison, arg) {
    let c = comparison.comparison.visit(this, arg);

    return c;
  }



  /**
   * First Person Pronoun
   */
  visitFirstPersonPronoun(fpp, arg) {

    return null;
  }



  /**
   * Second Person Pronoun
   */
  visitSecondPersonPronoun(spp, arg) {

    return null;
  }



  /**
   * Positive Noun
   */
  visitPositiveNoun(noun, arg) {

    return null;
  }



  /**
   * Neutral Noun
   */
  visitNeutralNoun(noun, arg) {

    return null;
  }



  /**
   * Negative Noun
   */
  visitNegativeNoun(noun, arg) {

    return null;
  }



  /**
   * Positive Adjective
   */
  visitPositiveAdjective(adjective, arg) {

    return null;
  }



  /**
   * Neutral Adjective
   */
  visitNeutralAdjective(adjective, arg) {

    return null;
  }



  /**
   * Negative Adjective
   */
  visitNegativeAdjective(adjective, arg) {

    return null;
  }



  /**
   * Unary Operator
   */
  visitUnaryOperator(operator, arg) {

    return null;
  }



  /**
   * Arithmetic Operator
   */
  visitArithmeticOperator(operator, arg) {

    return null;
  }



  /**
   * Positive Comparative
   */
  visitPositiveComparative(comparative, arg) {

    return null;
  }



  /**
   * Negative Comparative
   */
  visitNegativeComparative(comparative, arg) {

    return null;
  }



  /**
   * Be
   */
  visitBe(be, arg) {
    if (be.sequence==="You are" || be.sequence==="Thou art" || be.sequence==="You") {
      if (this.solo(arg.character)) {
        console.log("solo");
        throw new Error("Semantic Error - Cannot assign value to interlocutor, only 1 character is on stage.");
      }
    }

    return null;
  }



  /**
   * Be Comparative
   */
  visitBeComparative(be, arg) {
    if (be.sequence==="Are you" || be.sequence==="Art thou") {
      if (this.solo(arg.character))
        throw new Error("Semantic Error - Cannot compare value of interlocutor, only 1 character is on stage.");
    }

    return null;
  }

}
