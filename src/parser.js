import Token     from './token';
import Tokenizer from './tokenizer';
import AST       from './ast';

/**
 * Parses an SPL program and generates an AST.
 * @memberof Horatio
 * @param {string} input - The SPL program to parse
 */
export default class Parser {
  constructor(input) {
    this.tokenizer    = new Tokenizer(input);
    this.currentToken = null;
  }

  /**
   * Accept the current token if it matches an expected kind
   * @param  {number}      expectedKind - The byte value of the expected token
   * @throws {SyntaxError}              - Throws syntax error if current token kind does not match expected token kind.
   */
  accept(expectedKind) {
    if (this.currentToken.kind === expectedKind) {
      this.currentToken = this.tokenizer.nextToken();
    } else {
      throw new Error("Syntax Error - Unexpected Token: " + JSON.stringify(this.currentToken));
    }
  }

  /**
   * Accept the current token regardless of kind
   */
  acceptIt() {
    this.currentToken = this.tokenizer.nextToken();
  }

  /**
   * Parse the SPL program and return an AST
   * @returns {AST.Program} - The program AST.
   */
  parse() {
    this.currentToken = this.tokenizer.nextToken();
    var program = this.parseProgram();
    //console.log(program);
    if (this.currentToken !== -1) {
      throw new Error("Syntax Error - unexpected end of program");
    }
    return program;
  }



  /* Parsers */
  parseProgram() {
    var comment = this.parseComment();
    this.accept(Token.PERIOD);
    var declarations = [this.parseDeclaration()];
    while (this.currentToken.kind===Token.CHARACTER) {
      declarations.push(this.parseDeclaration());
    }
    var parts = [this.parsePart()];
    while (this.currentToken.kind===Token.ACT) {
      parts.push(this.parsePart());
    }
    return new AST.Program(comment, declarations, parts);
  }


  parseComment() {
    var comment = "";
    while (this.currentToken.kind!==Token.PERIOD) {
      comment += this.currentToken.sequence + " ";
      this.acceptIt();
    }
    return new AST.Comment(comment.trim());
  }


  parseDeclaration() {
    var character = new AST.Character(this.currentToken.sequence);
    this.accept(Token.CHARACTER);
    this.accept(Token.COMMA);
    var comment = this.parseComment();
    this.accept(Token.PERIOD);
    return new AST.Declaration(character, comment);
  }


  parsePart() {
    this.accept(Token.ACT);
    var numeral = new AST.Numeral(this.currentToken.sequence);
    this.accept(Token.ROMAN_NUMERAL);
    this.accept(Token.COLON);
    var comment = this.parseComment();
    this.accept(Token.PERIOD);
    var subparts = [this.parseSubPart()];
    while (this.currentToken.kind===Token.SCENE) {
      subparts.push(this.parseSubPart());
    }
    return new AST.Part(numeral, comment, subparts);
  }


  parseSubPart() {
    this.accept(Token.SCENE);
    var numeral = new AST.Numeral(this.currentToken.sequence);
    this.accept(Token.ROMAN_NUMERAL);
    this.accept(Token.COLON);
    var comment = this.parseComment();
    this.accept(Token.PERIOD);
    var stage = this.parseStage();
    return new AST.Subpart(numeral, comment, stage);
  }


  parseStage() {
    var start_presence, end_presence;
    if (this.currentToken.kind===Token.LEFT_BRACKET) {
      start_presence = this.parsePresence();
    }
    var dialogue = this.parseDialogue();
    if (this.currentToken.kind===Token.LEFT_BRACKET) {
      end_presence = this.parsePresence();
    }
    return new AST.Stage(dialogue, start_presence, end_presence);
  }


  parsePresence() {
    this.accept(Token.LEFT_BRACKET);
    var c1, c2, ret;
    switch (this.currentToken.kind) {

      case Token.ENTER:
        this.acceptIt();
        c1 = new AST.Character(this.currentToken.sequence);
        c2 = null;
        this.accept(Token.CHARACTER);
        if (this.currentToken.kind===Token.AMPERSAND) {
          this.acceptIt();
          c2 = new AST.Character(this.currentToken.sequence);
          this.accept(Token.CHARACTER);
        }
        ret = new AST.Enter(c1, c2);
        break;

      case Token.EXIT:
        this.acceptIt();
        var character = new AST.Character(this.currentToken.sequence);
        this.accept(Token.CHARACTER);
        ret = new AST.Exit(character);
        break;

      case Token.EXEUNT:
        this.acceptIt();
        if (this.currentToken.kind===Token.CHARACTER) {
          c1 = new AST.Character(this.currentToken.sequence);
          this.acceptIt();
          this.accept(Token.AMPERSAND);
          c2 = new AST.Character(this.currentToken.sequence);
          this.accept(Token.CHARACTER);
          ret = new AST.Exeunt(c1, c2);
        } else {
          ret = new AST.Exeunt();
        }
        break;
    }
    this.accept(Token.RIGHT_BRACKET);
    return ret;
  }


  parseDialogue() {
    var lines = [this.parseLine()];
    while (this.currentToken.kind===Token.CHARACTER) {
      lines.push(this.parseLine());
    }
    return new AST.Dialogue(lines);
  }


  parseLine() {
    var character = new AST.Character(this.currentToken.sequence);
    this.accept(Token.CHARACTER);
    this.accept(Token.COLON);
    var sentences = [this.parseSentence()];

    function isSentence(token) {
      switch(token) {
        case Token.BE:
        case Token.BE_COMPARATIVE:
        case Token.IF_SO:
        case Token.IMPERATIVE:
        case Token.INPUT_INTEGER:
        case Token.INPUT_CHAR:
        case Token.OUTPUT_INTEGER:
        case Token.OUTPUT_CHAR:
        case Token.REMEMBER:
        case Token.RECALL:
          return true;
        default:
          return false;
      }
    }
    while (isSentence(this.currentToken.kind)) {
      sentences.push(this.parseSentence());
    }
    return new AST.Line(character, sentences);
  }


  parseSentence() {
    var sentence;
    switch (this.currentToken.kind) {

      case Token.BE:
        sentence = this.parseAssignment();
        //this.accept(Token.PERIOD);
        this.acceptIt();
        break;

      case Token.BE_COMPARATIVE:
        sentence = this.parseQuestion();
        this.accept(Token.QUESTION_MARK);
        break;

      case Token.IF_SO:
        sentence = this.parseResponse();
        this.accept(Token.PERIOD);
        break;

      case Token.IMPERATIVE:
        sentence = this.parseGoto();
        this.accept(Token.PERIOD);
        break;

      case Token.INPUT_INTEGER:
      case Token.INPUT_CHAR:
        sentence = this.parseInput();
        this.accept(Token.EXCLAMATION_POINT);
        break;

      case Token.OUTPUT_INTEGER:
      case Token.OUTPUT_CHAR:
        sentence = this.parseOutput();
        this.accept(Token.EXCLAMATION_POINT);
        break;

      case Token.REMEMBER:
        sentence = this.parseRemember();
        this.accept(Token.EXCLAMATION_POINT);
        break;

      case Token.RECALL:
        sentence = this.parseRecall();
        this.accept(Token.EXCLAMATION_POINT);
        break;
    }
    return sentence;
  }


  parseBe() {
    var be;
    if (this.currentToken.kind===Token.BE) {
      be = new AST.Be(this.currentToken.sequence);
      this.acceptIt();
    }
    return be;
  }


  parseAssignment() {
    var be = this.parseBe();
    if (this.currentToken.kind===Token.AS) {
      this.acceptIt();
      this.parseAdjective();
      this.accept(Token.AS);
    }
    var value = this.parseValue();
    return new AST.AssignmentSentence(be, value);
  }


  parseValue() {
    var value, pronoun;
    if (this.currentToken.kind===Token.ARTICLE) {
      this.acceptIt();
    }
    switch (this.currentToken.kind) {

      case Token.UNARY_OPERATOR:
        value = this.parseUnaryOperation();
        break;

      case Token.ARITHMETIC_OPERATOR:
        value = this.parseArithmeticOperation();
        break;

      case Token.POSITIVE_ADJECTIVE:
      case Token.NEUTRAL_ADJECTIVE:
      case Token.NEGATIVE_ADJECTIVE:
      case Token.POSITIVE_NOUN:
      case Token.NEUTRAL_NOUN:
      case Token.NEGATIVE_NOUN:
        value = this.parseConstant();
        break;

      case Token.FIRST_PERSON_PRONOUN:
        pronoun = new AST.FirstPersonPronoun(this.currentToken.sequence);
        value   = new AST.PronounValue(pronoun);
        this.acceptIt();
        break;
      case Token.SECOND_PERSON_PRONOUN:
        pronoun = new AST.SecondPersonPronoun(this.currentToken.sequence);
        value   = new AST.PronounValue(pronoun);
        this.acceptIt();
        break;
      default:
        throw new Error("Syntax Error - Unknown Token: "+this.currentToken.sequence);
    }
    return value;
  }


  parseUnaryOperation() {
    var operator = new AST.UnaryOperator(this.currentToken.sequence);
    this.accept(Token.UNARY_OPERATOR);
    var value = this.parseValue();
    return new AST.UnaryOperationValue(operator, value);
  }


  parseArithmeticOperation() {
    if (this.currentToken.kind===Token.ARTICLE) {
      this.acceptIt();
    }
    var operator = new AST.ArithmeticOperator(this.currentToken.sequence);
    this.accept(Token.ARITHMETIC_OPERATOR);
    var value_1 = this.parseValue();
    this.accept(Token.AND);
    var value_2 = this.parseValue();
    return new AST.ArithmeticOperationValue(operator, value_1, value_2);
  }


  parseConstant() {
    if (this.currentToken.kind===Token.ARTICLE) {
      this.acceptIt();
    }
    switch (this.currentToken.kind) {

      case Token.NEUTRAL_ADJECTIVE:
      case Token.NEUTRAL_NOUN:
        throw new Error("Syntax Error - Constant Value cannot start with neutral adjective or noun.");

      case Token.POSITIVE_ADJECTIVE:
      case Token.POSITIVE_NOUN:
        return this.parsePositiveConstant();

      case Token.NEGATIVE_ADJECTIVE:
      case Token.NEGATIVE_NOUN:
        return this.parseNegativeConstant();

      default:
        throw new Error("Syntax Error - Unknown Token: "+this.currentToken.sequence);

    }
  }


  parsePositiveConstant() {
    var adjectives = [];
    var adjective;
    while (this.currentToken.kind!==Token.POSITIVE_NOUN) {
      switch (this.currentToken.kind) {
        case Token.POSITIVE_ADJECTIVE:
          adjective = new AST.PositiveAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Token.NEUTRAL_ADJECTIVE:
          adjective = new AST.NeutralAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Token.NEGATIVE_ADJECTIVE:
          throw new Error("Syntax Error - Cannot mix positive and negative words in constant assignment.");
      }
    }
    var noun = new AST.PositiveNoun(this.currentToken.sequence);
    this.accept(Token.POSITIVE_NOUN);
    return new AST.PositiveConstantValue(noun, adjectives);
  }


  parseNegativeConstant() {
    var adjectives = [];
    var adjective;
    while (this.currentToken.kind!==Token.NEGATIVE_NOUN) {
      switch (this.currentToken.kind) {
        case Token.NEGATIVE_ADJECTIVE:
          adjective = new AST.NegativeAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Token.NEUTRAL_ADJECTIVE:
          adjective = new AST.NeutralAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Token.POSITIVE_ADJECTIVE:
          throw new Error("Syntax Error - Cannot mix positive and negative words in constant assignment.");
      }
    }
    var noun = new AST.NegativeNoun(this.currentToken.sequence);
    this.accept(Token.NEGATIVE_NOUN);
    return new AST.NegativeConstantValue(noun, adjectives);
  }


  parseQuestion() {
    var be         = this.parseBeComparative();
    var comparison = this.parseComparative();
    var value      = this.parseValue();
    return new AST.QuestionSentence(be, comparison, value);
  }


  parseBeComparative() {
    var be_comparative;
    if (this.currentToken.kind===Token.BE_COMPARATIVE) {
      be_comparative = new AST.BeComparative(this.currentToken.sequence);
    }
    return be_comparative;
  }


  parseComparative() {
    var comparison, comparative, adjective;
    switch (this.currentToken.kind) {

      case Token.POSITIVE_COMPARATIVE:
        comparative = new AST.PositiveComparative(this.currentToken.sequence);
        comparison  = new AST.GreaterThanComparison(comparative);
        this.acceptIt();
        this.accept(Token.THAN);
        break;
      case Token.NEGATIVE_COMPARATIVE:
        comparative = new AST.NegativeComparative(this.currentToken.sequence);
        comparison  = new AST.LesserThanComparison(comparative);
        this.acceptIt();
        this.accept(Token.THAN);
        break;

      case Token.AS:
        this.acceptIt();
        adjective  = this.parseAdjective();
        comparison = new AST.EqualToComparison(adjective);
        this.accept(Token.AS);
        break;

      case Token.NOT:
        this.acceptIt();
        comparative = this.parseComparative();
        comparison  = new AST.InverseComparison(comparative);
        //switch (this.currentToken.kind) {
        //  case Token.POSITIVE_COMPARATIVE:
        //  case Token.NEGATIVE_COMPARATIVE:
        //    this.acceptIt();
        //    this.accept(Token.THAN);
        //    break;
        //}
        break;
    }
    return comparison;
  }


  parseResponse() {
    this.accept(Token.IF_SO);
    this.accept(Token.COMMA);
    var goto = this.parseGoto();
    return new AST.ResponseSentence(goto);
  }


  parseGoto() {
    this.accept(Token.IMPERATIVE);
    this.accept(Token.RETURN);
    this.accept(Token.TO);
    this.accept(Token.SCENE);
    var numeral = new AST.Numeral(this.currentToken.sequence);
    this.accept(Token.ROMAN_NUMERAL);
    return new AST.Goto(numeral);
  }


  parseInput() {
    var sequence = this.currentToken.sequence;
    var ret;
    switch (this.currentToken.kind) {
      case Token.INPUT_INTEGER:
        ret = new AST.IntegerInputSentence(sequence);
        break;
      case Token.INPUT_CHAR:
        ret = new AST.CharInputSentence(sequence);
        break;
    }
    this.acceptIt();
    return ret;
  }


  parseOutput() {
    var sequence = this.currentToken.sequence;
    var ret;
    switch (this.currentToken.kind) {
      case Token.OUTPUT_INTEGER:
        ret = new AST.IntegerOutputSentence(sequence);
        break;
      case Token.OUTPUT_CHAR:
        ret = new AST.CharOutputSentence(sequence);
        break;
    }
    this.acceptIt();
    return ret;
  }


  parseRemember() {
    this.accept(Token.REMEMBER);
    var pronoun;
    switch (this.currentToken.kind) {
      case Token.FIRST_PERSON_PRONOUN:
        pronoun = new AST.FirstPersonPronoun(this.currentToken.sequence);
        this.acceptIt();
        break;
      case Token.SECOND_PERSON_PRONOUN:
        pronoun = new AST.SecondPersonPronoun(this.currentToken.sequence);
        this.acceptIt();
        break;
    }
    return new AST.RememberSentence(pronoun);
  }


  parseRecall() {
    this.accept(Token.RECALL);
    this.accept(Token.COMMA);
    var comment = "";
    while (this.currentToken.kind!==Token.EXCLAMATION_POINT) {
      comment += this.currentToken.sequence + " ";
      this.acceptIt();
    }
    return new AST.RecallSentence(comment.trim());
  }


  parseAdjective() {
    switch (this.currentToken.kind) {
      case Token.POSITIVE_ADJECTIVE:
      case Token.NEUTRAL_ADJECTIVE:
      case Token.NEGATIVE_ADJECTIVE:
        this.acceptIt();
        break;
    }
  }
}
