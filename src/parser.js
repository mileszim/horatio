/**
 * Parses an SPL program and generates an AST.
 * @memberof Horatio
 * @param {string} input - The SPL program to parse
 * @constructor
 */
Horatio.Parser = function(input) {
  this.tokenizer    = new Horatio.Tokenizer(input);
  this.currentToken = null;
};

Horatio.Parser.prototype = {
  
  /**
   * Accept the current token if it matches an expected kind
   * @param  {number}      expectedKind - The byte value of the expected token
   * @throws {SyntaxError}              - Throws syntax error if current token kind does not match expected token kind.
   */
  accept: function(expectedKind) {
    if (this.currentToken.kind === expectedKind) {
      this.currentToken = this.tokenizer.nextToken();
    } else {
      throw new Error("Syntax Error - Unexpected Token: " + JSON.stringify(this.currentToken));
    }
  },
  
  /**
   * Accept the current token regardless of kind
   */
  acceptIt: function() {
    this.currentToken = this.tokenizer.nextToken();
  },
  
  /**
   * Parse the SPL program and return an AST
   * @returns {Horatio.AST.Program} - The program AST.
   */
  parse: function() {
    this.currentToken = this.tokenizer.nextToken();
    var program = this.parseProgram();
    if (this.currentToken !== -1) {
      throw new Error("Syntax Error - unexpected end of program");
    }
    return program;
  },
  
  
  
  /* Parsers */
  parseProgram: function() {
    var comment = this.parseComment();
    this.accept(Horatio.Token.PERIOD);
    var declarations = [this.parseDeclaration()];
    while (this.currentToken.kind===Horatio.Token.CHARACTER) {
      declarations.push(this.parseDeclaration());
    }
    var parts = [this.parsePart()];
    while (this.currentToken.kind===Horatio.Token.ACT) {
      parts.push(this.parsePart());
    }
    return new Horatio.AST.Program(comment, declarations, parts);
  },
  
  
  parseComment: function() {
    var comment = "";
    while (this.currentToken.kind!==Horatio.Token.PERIOD) {
      comment += this.currentToken.sequence + " ";
      this.acceptIt();
    }
    return new Horatio.AST.Comment(comment.trim());
  },
  
  
  parseDeclaration: function() {
    var character = new Horatio.AST.Character(this.currentToken.sequence);
    this.accept(Horatio.Token.CHARACTER);
    this.accept(Horatio.Token.COMMA);
    var comment = this.parseComment();
    this.accept(Horatio.Token.PERIOD);
    return new Horatio.AST.Declaration(character, comment);
  },
  
  
  parsePart: function() {
    this.accept(Horatio.Token.ACT);
    var numeral = new Horatio.AST.Numeral(this.currentToken.sequence);
    this.accept(Horatio.Token.ROMAN_NUMERAL);
    this.accept(Horatio.Token.COLON);
    var comment = this.parseComment();
    this.accept(Horatio.Token.PERIOD);
    var subparts = [this.parseSubPart()];
    while (this.currentToken.kind===Horatio.Token.SCENE) {
      subparts.push(this.parseSubPart());
    }
    return new Horatio.AST.Part(numeral, comment, subparts);
  },
  
  
  parseSubPart: function() {
    this.accept(Horatio.Token.SCENE);
    var numeral = new Horatio.AST.Numeral(this.currentToken.sequence);
    this.accept(Horatio.Token.ROMAN_NUMERAL);
    this.accept(Horatio.Token.COLON);
    var comment = this.parseComment();
    this.accept(Horatio.Token.PERIOD);
    var stage = this.parseStage();
    return new Horatio.AST.Subpart(numeral, comment, stage);
  },
  
  
  parseStage: function() {
    var start_presence, end_presence;
    if (this.currentToken.kind===Horatio.Token.LEFT_BRACKET) {
      start_presence = this.parsePresence();
    }
    var dialogue = this.parseDialogue();
    if (this.currentToken.kind===Horatio.Token.LEFT_BRACKET) {
      end_presence = this.parsePresence();
    }
    return new Horatio.AST.Stage(dialogue, start_presence, end_presence);
  },
  
  
  parsePresence: function() {
    this.accept(Horatio.Token.LEFT_BRACKET);
    var c1, c2, ret;
    switch (this.currentToken.kind) {
      
      case Horatio.Token.ENTER:
        this.acceptIt();
        c1 = new Horatio.AST.Character(this.currentToken.sequence);
        c2 = null;
        this.accept(Horatio.Token.CHARACTER);
        if (this.currentToken.kind===Horatio.Token.AMPERSAND) {
          this.acceptIt();
          c2 = new Horatio.AST.Character(this.currentToken.sequence);
          this.accept(Horatio.Token.CHARACTER);
        }
        ret = new Horatio.AST.Enter(c1, c2);
        break;
        
      case Horatio.Token.EXIT:
        this.acceptIt();
        var character = new Horatio.AST.Character(this.currentToken.sequence);
        this.accept(Horatio.Token.CHARACTER);
        ret = new Horatio.AST.Exit(character);
        break;
      
      case Horatio.Token.EXEUNT:
        this.acceptIt();
        if (this.currentToken.kind===Horatio.Token.CHARACTER) {
          c1 = new Horatio.AST.Character(this.currentToken.sequence);
          this.acceptIt();
          this.accept(Horatio.Token.AMPERSAND);
          c2 = new Horatio.AST.Character(this.currentToken.sequence);
          this.accept(Horatio.Token.CHARACTER);
          ret = new Horatio.AST.Exeunt(c1, c2);
        } else {
          ret = new Horatio.AST.Exeunt();
        }
        break;
    }
    this.accept(Horatio.Token.RIGHT_BRACKET);
    return ret;
  },
  
  
  parseDialogue: function() {
    var lines = [this.parseLine()];
    while (this.currentToken.kind===Horatio.Token.CHARACTER) {
      lines.push(this.parseLine());
    }
    return new Horatio.AST.Dialogue(lines);
  },
  
  
  parseLine: function() {
    var character = new Horatio.AST.Character(this.currentToken.sequence);
    this.accept(Horatio.Token.CHARACTER);
    this.accept(Horatio.Token.COLON);
    var sentences = [this.parseSentence()];
    
    function isSentence(token) {
      switch(token) {
        case Horatio.Token.BE:
        case Horatio.Token.BE_COMPARATIVE:
        case Horatio.Token.IF_SO:
        case Horatio.Token.IMPERATIVE:
        case Horatio.Token.INPUT_INTEGER:
        case Horatio.Token.INPUT_CHAR:
        case Horatio.Token.OUTPUT_INTEGER:
        case Horatio.Token.OUTPUT_CHAR:
        case Horatio.Token.REMEMBER:
        case Horatio.Token.RECALL:
          return true;
        default:
          return false;
      }
    }
    while (isSentence(this.currentToken.kind)) {
      sentences.push(this.parseSentence());
    }
    return new Horatio.AST.Line(character, sentences);
  },
  
  
  parseSentence: function() {
    var sentence;
    switch (this.currentToken.kind) {
      
      case Horatio.Token.BE:
        sentence = this.parseAssignment();
        this.accept(Horatio.Token.PERIOD);
        break;
        
      case Horatio.Token.BE_COMPARATIVE:
        sentence = this.parseQuestion();
        this.accept(Horatio.Token.QUESTION_MARK);
        break;
      
      case Horatio.Token.IF_SO:
        sentence = this.parseResponse();
        this.accept(Horatio.Token.PERIOD);
        break;
      
      case Horatio.Token.IMPERATIVE:
        sentence = this.parseGoto();
        this.accept(Horatio.Token.PERIOD);
        break;
      
      case Horatio.Token.INPUT_INTEGER:
      case Horatio.Token.INPUT_CHAR:
        sentence = this.parseInput();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.OUTPUT_INTEGER:
      case Horatio.Token.OUTPUT_CHAR:
        sentence = this.parseOutput();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.REMEMBER:
        sentence = this.parseRemember();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.RECALL:
        sentence = this.parseRecall();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
    }
    return sentence;
  },
  
  
  parseBe: function() {
    var be;
    if (this.currentToken.kind===Horatio.Token.BE) {
      be = new Horatio.AST.Be(this.currentToken.sequence);
      this.acceptIt();
    }
    return be;
  },
  
  
  parseAssignment: function() {
    var be = this.parseBe();
    if (this.currentToken.kind===Horatio.Token.AS) {
      this.acceptIt();
      this.parseAdjective();
      this.accept(Horatio.Token.AS);
    }
    var value = this.parseValue();
    return new Horatio.AST.AssignmentSentence(be, value);
  },
  
  
  parseValue: function() {
    var value, pronoun;
    switch (this.currentToken.kind) {
      
      case Horatio.Token.UNARY_OPERATOR:
        value = this.parseUnaryOperation();
        break;
      
      case Horatio.Token.ARITHMETIC_OPERATOR:
        value = this.parseArithmeticOperation();
        break;
      
      case Horatio.Token.POSITIVE_NOUN:
      case Horatio.Token.NEUTRAL_NOUN:
      case Horatio.Token.NEGATIVE_NOUN:
      case Horatio.Token.ARTICLE:
        value = this.parseConstant();
        break;
        
      case Horatio.Token.FIRST_PERSON_PRONOUN:
        pronoun = new Horatio.AST.FirstPersonPronoun(this.currentToken.sequence);
        value   = new Horatio.AST.PronounValue(pronoun);
        this.acceptIt();
        break;
      case Horatio.Token.SECOND_PERSON_PRONOUN:
        pronoun = new Horatio.AST.SecondPersonPronoun(this.currentToken.sequence);
        value   = new Horatio.AST.PronounValue(pronoun);
        this.acceptIt();
        break;
    }
    return value;
  },
  
  
  parseUnaryOperation: function() {
    var operator = new Horatio.AST.UnaryOperator(this.currentToken.sequence);
    this.accept(Horatio.Token.UNARY_OPERATOR);
    var value = this.parseValue();
    return new Horatio.AST.UnaryOperationValue(operator, value);
  },
  
  
  parseArithmeticOperation: function() {
    var operator = new Horatio.AST.ArithmeticOperator(this.currentToken.sequence);
    this.accept(Horatio.Token.ARITHMETIC_OPERATOR);
    var value_1 = this.parseValue();
    this.accept(Horatio.Token.AND);
    var value_2 = this.parseValue();
    return new Horatio.AST.ArithmeticOperationValue(operator, value_1, value_2);
  },
  
  
  parseConstant: function() {
    if (this.currentToken.kind===Horatio.Token.ARTICLE) {
      this.acceptIt();
    }
    switch (this.currentToken.kind) {
      
      case Horatio.Token.POSITIVE_ADJECTIVE:
      case Horatio.Token.POSITIVE_NOUN:
        return this.parsePositiveConstant();
      
      case Horatio.Token.NEGATIVE_ADJECTIVE:
      case Horatio.Token.NEGATIVE_NOUN:
        return this.parseNegativeConstant();
        
    }
  },
  
  
  parsePositiveConstant: function() {
    var adjectives = [];
    var adjective;
    while (this.currentToken.kind!==Horatio.Token.POSITIVE_NOUN) {
      switch (this.currentToken.kind) {
        case Horatio.Token.POSITIVE_ADJECTIVE:
          adjective = new Horatio.AST.PositiveAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Horatio.Token.NEUTRAL_ADJECTIVE:
          adjective = new Horatio.AST.NeutralAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
      }
    }
    var noun = new Horatio.AST.PositiveNoun(this.currentToken.sequence);
    this.accept(Horatio.Token.POSITIVE_NOUN);
    return new Horatio.AST.PositiveConstantValue(noun, adjectives);
  },
  
  
  parseNegativeConstant: function() {
    var adjectives = [];
    var adjective;
    while (this.currentToken.kind!==Horatio.Token.NEGATIVE_NOUN) {
      switch (this.currentToken.kind) {
        case Horatio.Token.NEGATIVE_ADJECTIVE:
          adjective = new Horatio.AST.NegativeAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Horatio.Token.NEUTRAL_ADJECTIVE:
          adjective = new Horatio.AST.NeutralAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
      }
    }
    var noun = new Horatio.AST.NegativeNoun(this.currentToken.sequence);
    this.accept(Horatio.Token.NEGATIVE_NOUN);
    return new Horatio.AST.NegativeConstantValue(noun, adjectives);
  },
  
  
  parseQuestion: function() {
    var be         = this.parseBeComparative();
    var comparison = this.parseComparative();
    var value      = this.parseValue();
    return new Horatio.AST.QuestionSentence(be, comparison, value);
  },
  
  
  parseBeComparative: function() {
    var be_comparative;
    if (this.currentToken.kind===Horatio.Token.BE_COMPARATIVE) {
      be_comparative = new Horatio.AST.BeComparative(this.currentToken.sequence);
    }
    return be_comparative;
  },
  
  
  parseComparative: function() {
    var comparison, comparative, adjective;
    switch (this.currentToken.kind) {
      
      case Horatio.Token.POSITIVE_COMPARATIVE:
        comparative = new Horatio.AST.PositiveComparative(this.currentToken.sequence);
        comparison  = new Horatio.AST.GreaterThanComparison(comparative);
        this.acceptIt();
        this.accept(Horatio.Token.THAN);
        break;
      case Horatio.Token.NEGATIVE_COMPARATIVE:
        comparative = new Horatio.AST.NegativeComparative(this.currentToken.sequence);
        comparison  = new Horatio.AST.LesserThanComparison(comparative);
        this.acceptIt();
        this.accept(Horatio.Token.THAN);
        break;
        
      case Horatio.Token.AS:
        this.acceptIt();
        adjective  = this.parseAdjective();
        comparison = new Horatio.AST.EqualToComparison(adjective);
        this.accept(Horatio.Token.AS);
        break;
      
      case Horatio.Token.NOT:
        this.acceptIt();
        comparative = this.parseComparative();
        comparison  = new Horatio.AST.InverseComparison(comparative);
        //switch (this.currentToken.kind) {
        //  case Horatio.Token.POSITIVE_COMPARATIVE:
        //  case Horatio.Token.NEGATIVE_COMPARATIVE:
        //    this.acceptIt();
        //    this.accept(Horatio.Token.THAN);
        //    break;
        //}
        break;
    }
    return comparison;
  },
  
  
  parseResponse: function() {
    this.accept(Horatio.Token.IF_SO);
    this.accept(Horatio.Token.COMMA);
    var goto = this.parseGoto();
    return new Horatio.AST.ResponseSentence(goto);
  },
  
  
  parseGoto: function() {
    this.accept(Horatio.Token.IMPERATIVE);
    this.accept(Horatio.Token.RETURN);
    this.accept(Horatio.Token.TO);
    this.accept(Horatio.Token.SCENE);
    var numeral = new Horatio.AST.Numeral(this.currentToken.sequence);
    this.accept(Horatio.Token.ROMAN_NUMERAL);
    return new Horatio.AST.Goto(numeral);
  },
  
  
  parseInput: function() {
    var sequence = this.currentToken.sequence;
    var ret;
    switch (this.currentToken.kind) {
      case Horatio.Token.INPUT_INTEGER:
        ret = new Horatio.AST.IntegerInputSentence(sequence);
        break;
      case Horatio.Token.INPUT_CHAR:
        ret = new Horatio.AST.CharInputSentence(sequence);
        break;
    }
    this.acceptIt();
    return ret;
  },
  
  
  parseOutput: function() {
    var sequence = this.currentToken.sequence;
    var ret;
    switch (this.currentToken.kind) {
      case Horatio.Token.OUTPUT_INTEGER:
        ret = new Horatio.AST.IntegerOutputSentence(sequence);
        break;
      case Horatio.Token.OUTPUT_CHAR:
        ret = new Horatio.AST.CharOutputSentence(sequence);
        break;
    }
    this.acceptIt();
    return ret;
  },
  
  
  parseRemember: function() {
    this.accept(Horatio.Token.REMEMBER);
    var pronoun;
    switch (this.currentToken.kind) {
      case Horatio.Token.FIRST_PERSON_PRONOUN:
        pronoun = new Horatio.AST.FirstPersonPronoun(this.currentToken.sequence);
        this.acceptIt();
        break;
      case Horatio.Token.SECOND_PERSON_PRONOUN:
        pronoun = new Horatio.AST.SecondPersonPronoun(this.currentToken.sequence);
        this.acceptIt();
        break;
    }
    return new Horatio.AST.RememberSentence(pronoun);
  },
  
  
  parseRecall: function() {
    this.accept(Horatio.Token.RECALL);
    this.accept(Horatio.Token.COMMA);
    var comment = "";
    while (this.currentToken.kind!==Horatio.Token.EXCLAMATION_POINT) {
      comment += this.currentToken.sequence + " ";
      this.acceptIt();
    }
    return new Horatio.AST.RecallSentence(comment.trim());
  },
  
  
  parseAdjective: function() {
    switch (this.currentToken.kind) {
      case Horatio.Token.POSITIVE_ADJECTIVE:
      case Horatio.Token.NEUTRAL_ADJECTIVE:
      case Horatio.Token.NEGATIVE_ADJECTIVE:
        this.acceptIt();
        break;
    }
  }
   
};