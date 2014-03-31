/*! horatio - v0.0.0 - 2014-03-30
* https://github.com/mileszim/horatio
* Copyright (c) 2014 ; Licensed  */
/**
 * Horatio Namespace
 * @namespace
 */
var Horatio = Horatio || {
  
  // Is this running on nodejs?
  // Borrowed with love from moment.js
  hasModule: (typeof module !== 'undefined' && module.exports && typeof require !== 'undefined')
  
};


/** Expose */
if (Horatio.hasModule) module.exports = Horatio;
Horatio.AST = {
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Comment}             comment
   * @param {Array.<Horatio.AST.Declaration>} declarations
   * @param {Array.<Horatio.AST.Part>}        parts
   * @constructor
   */
  Program: function(comment, declarations, parts) {
    this.comment      = comment;
    this.declarations = declarations;
    this.parts        = parts;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitProgram(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character} character
   * @param {Horatio.AST.Comment}   comment
   * @constructor
   */
  Declaration: function(character, comment) {
    this.character = character;
    this.comment   = comment;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitDeclaration(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Numeral}         numeral
   * @param {Horatio.AST.Comment}         comment
   * @param {Array.<Horatio.AST.Subpart>} subparts
   * @constructor
   */
  Part: function(numeral, comment, subparts) {
    this.numeral  = numeral;
    this.comment  = comment;
    this.subparts = subparts;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPart(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Numeral} numeral
   * @param {Horatio.AST.Comment} comment
   * @param {Horatio.AST.Stage}   stage
   * @constructor
   */
  Subpart: function(numeral, comment, stage) {
    this.numeral = numeral;
    this.comment = comment;
    this.stage   = stage;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitSubpart(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Dialogue}                                  dialogue
   * @param {Horatio.AST.Enter|Horatio.AST.Exit|Horatio.AST.exeunt} start_presence
   * @param {Horatio.AST.Enter|Horatio.AST.Exit|Horatio.AST.exeunt} end_presence
   * @constructor
   */
  Stage: function(dialogue, start_presence, end_presence) {
    this.dialogue       = dialogue;
    this.start_presence = start_presence;
    this.end_presence   = end_presence;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitStage(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character} character_1
   * @param {Horatio.AST.Character} character_2
   * @constructor
   */
  Enter: function(character_1, character_2) {
    this.character_1 = character_1;
    this.character_2 = character_2;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitEnter(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character} character
   * @constructor
   */
  Exit: function(character) {
    this.character = character;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitExit(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character} character_1
   * @param {Horatio.AST.Character} character_2
   * @constructor
   */
  Exeunt: function(character_1, character_2) {
    this.character_1 = character_1;
    this.character_2 = character_2;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitExeunt(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Array.<Horatio.AST.Line>} lines
   * @constructor
   */
  Dialogue: function(lines) {
    this.lines = lines;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitDialogue(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character}         character
   * @param {Array.<Horatio.AST.Sentences>} sentences
   * @constructor
   */
  Line: function(character, sentences) {
    this.character = character;
    this.sentences = sentences;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitLine(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Numeral} numeral
   * @constructor
   */
  Goto: function(numeral) {
    this.numeral = numeral;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitGoto(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  AssignmentSentence: function(value) {
    this.value = value;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitAssignmentSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  QuestionSentence: function(comparison, value) {
    this.comparison = comparison;
    this.value      = value;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitQuestionSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  ResponseSentence: function(goto) {
    this.goto = goto;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitResponseSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  GotoSentence: function(goto) {
    this.goto = goto;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitGotoSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  IntegerInputSentence: function(sequence) { 
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitIntegerInputSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  CharInputSentence: function(sequence) { 
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitCharInputSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  IntegerOutputSentence: function(sequence) { 
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitIntegerOutputSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  CharOutputSentence: function(sequence) { 
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitCharOutputSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  RememberSentence: function(pronoun) {
    this.pronoun = pronoun;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitRememberSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  RecallSentence: function(comment) {
    this.comment = comment;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitRecallSentence(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PositiveConstantValue: function(noun, adjectives) {
    this.noun       = noun;
    this.adjectives = adjectives;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveConstantValue(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NegativeConstantValue: function(noun, adjectives) {
    this.noun       = noun;
    this.adjectives = adjectives;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveConstantValue(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  UnaryOperationValue: function(operator, value) {
    this.operator = operator;
    this.value    = value;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveConstantValue(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  ArithmeticOperationValue: function(operator, value_1, value_2) {
    this.operator = operator;
    this.value_1  = value_1;
    this.value_2  = value_2;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitArithmeticOperationValue(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PronounValue: function(pronoun) {
    this.pronoun = pronoun;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPronounValue(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  GreaterThanComparison: function(comparative) {
    this.comparative = comparative;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitGreaterThanComparison(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  LesserThanComparison: function(comparative) {
    this.comparative = comparative;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitLesserThanComparison(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  EqualToComparison: function(adjective) {
    this.adjective = adjective;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitEqualToComparison(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  InverseComparison: function(comparison) {
    this.comparison = comparison;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitInverseComparison(this, arg);
    };
  },
  
  
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  Comment: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitComment(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  Numeral: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNumeral(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  Character: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitCharacter(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  FirstPersonPronoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitFirstPersonPronoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  SecondPersonPronoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitSecondPersonPronoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PositiveNoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveNoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NeutralNoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNeutralNoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NegativeNoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNegativeNoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PositiveAdjective: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveAdjective(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NeutralAdjective: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNeutralAdjective(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NegativeAdjective: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNegativeAdjective(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  UnaryOperator: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitUnaryOperator(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  ArithmeticOperator: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitArithmeticOperator(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PositiveComparative: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveComparative(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NegativeComparative: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNegativeComparative(this, arg);
    };
  }
  
};
Horatio.Compiler = function() {};


Horatio.Compiler.prototype = {
  
  /**
   * Compile an SPL program
   * @param {string} input - The input SPL program
   */
  compile: function(input) {
    // Parse input
    var parser = new Horatio.Parser(input);
    var AST = parser.parse();
    
    
    return AST;
  }
  
};
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
          break;
        }
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
  
  
  parseAssignment: function() {
    this.accept(Horatio.Token.BE);
    if (this.currentToken.kind===Horatio.Token.AS) {
      this.acceptIt();
      this.parseAdjective();
      this.accept(Horatio.Token.AS);
    }
    var value = this.parseValue();
    return new Horatio.AST.AssignmentSentence(value);
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
    this.accept(Horatio.Token.BE_COMPARATIVE);
    var comparison = this.parseComparative();
    var value      = this.parseValue();
    return new Horatio.AST.QuestionSentence(comparison, value);
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
Horatio.Token = function(kind, sequence) {
  this.kind     = kind;
  this.sequence = sequence;
};



/** @static */ Horatio.Token.CHARACTER             = 10;
/** @static */ Horatio.Token.ARTICLE               = 11;
/** @static */ Horatio.Token.BE                    = 12;
/** @static */ Horatio.Token.ACT                   = 13;
/** @static */ Horatio.Token.SCENE                 = 14;
/** @static */ Horatio.Token.ENTER                 = 15;
/** @static */ Horatio.Token.EXIT                  = 16;
/** @static */ Horatio.Token.EXEUNT                = 17;

///** @static */ Horatio.Token.INPUT                 = 20;
/** @static */ Horatio.Token.INPUT_INTEGER         = 21;
/** @static */ Horatio.Token.INPUT_CHAR            = 22;
///** @static */ Horatio.Token.OUTPUT                = 23;
/** @static */ Horatio.Token.OUTPUT_INTEGER        = 24;
/** @static */ Horatio.Token.OUTPUT_CHAR           = 25;
  
/** @static */ Horatio.Token.IMPERATIVE            = 30;
/** @static */ Horatio.Token.TO                    = 31;
/** @static */ Horatio.Token.RETURN                = 32;
  
/** @static */ Horatio.Token.POSITIVE_COMPARATIVE  = 40;
/** @static */ Horatio.Token.NEGATIVE_COMPARATIVE  = 41;
/** @static */ Horatio.Token.AS                    = 42;
/** @static */ Horatio.Token.NOT                   = 43;
/** @static */ Horatio.Token.THAN                  = 44;
/** @static */ Horatio.Token.IF_SO                 = 45;
/** @static */ Horatio.Token.BE_COMPARATIVE        = 46;
  
/** @static */ Horatio.Token.UNARY_OPERATOR        = 50;
/** @static */ Horatio.Token.ARITHMETIC_OPERATOR   = 51;
  
/** @static */ Horatio.Token.REMEMBER              = 60;
/** @static */ Horatio.Token.RECALL                = 61;
  
/** @static */ Horatio.Token.FIRST_PERSON_PRONOUN  = 70;
/** @static */ Horatio.Token.SECOND_PERSON_PRONOUN = 71;
/** @static */ Horatio.Token.POSITIVE_ADJECTIVE    = 72;
/** @static */ Horatio.Token.NEUTRAL_ADJECTIVE     = 73;
/** @static */ Horatio.Token.NEGATIVE_ADJECTIVE    = 74;
/** @static */ Horatio.Token.POSITIVE_NOUN         = 75;
/** @static */ Horatio.Token.NEUTRAL_NOUN          = 76;
/** @static */ Horatio.Token.NEGATIVE_NOUN         = 77;
/** @static */ Horatio.Token.ROMAN_NUMERAL         = 78;
  
/** @static */ Horatio.Token.COLON                 = 90;
/** @static */ Horatio.Token.COMMA                 = 91;
/** @static */ Horatio.Token.PERIOD                = 92;
/** @static */ Horatio.Token.EXCLAMATION_POINT     = 93;
/** @static */ Horatio.Token.QUESTION_MARK         = 94;
/** @static */ Horatio.Token.AMPERSAND             = 95;
/** @static */ Horatio.Token.AND                   = 96;
/** @static */ Horatio.Token.LEFT_BRACKET          = 97;
/** @static */ Horatio.Token.RIGHT_BRACKET         = 98;
  
/** @static */ Horatio.Token.COMMENT               = 110;
Horatio.Tokenizer = function(input) {
  this.tokens = [];
  this.dictionary = {};
  this.buildDictionary();
  this.tokenize(input);
};


Horatio.Tokenizer.prototype = {
  
  /**
   * Get the next token
   * @returns {Horatio.Token|number} - The next token from the input program, or -1 if no remaining tokens.
   */
  nextToken: function() {
    if (this.tokens.length > 0) {
      return this.tokens.shift();
    } else {
      return -1;
    }
  },
  
  
  
  /**
   * Scan and tokenize an input SPL program
   * @param {string} input - The input SPL program
   */
  tokenize: function(input) {
    // strip all newlines/extra whitespace
    input = input.trim().replace(/[\s\n]+/g," ");
    
    // replace terminals
    input = input.replace(/[:,.!?\[\]]/g, function(match) {
      switch(match) {
        case ":": return " COLON";             //break;
        case ",": return " COMMA";             //break;
        case ".": return " PERIOD";            //break;
        case "!": return " EXCLAMATION_POINT"; //break;
        case "?": return " QUESTION_MARK";     //break;
        case "[": return "LEFT_BRACKET ";      //break;
        case "]": return " RIGHT_BRACKET";     //break;
      }
    });
    
    // Split into array by spaces
    var input_array = input.split(" ");
    
    // tokenize
    while (input_array.length > 0) {
      var current = input_array.shift();
      if (this.dictionary[current]) {
        this.tokens.push(new Horatio.Token(this.dictionary[current], current));
      } else {
        
        // check if further appends will find match
        var br = 0;
        var orig = current;
        while (!this.dictionary[current] && br < 6) {
          current = current + " " + input_array[br];
          
          if (this.dictionary[current]) {
            this.tokens.push(new Horatio.Token(this.dictionary[current], current));
            input_array.splice(0,br+1);
          }
          br += 1;
        }
        
        // comment
        if (br===6) this.tokens.push(new Horatio.Token(43, orig));
      }
    }
  },
  
  
  
  /**
   * Builds a hash of words -> byte codes for scanning
   */
  buildDictionary: function() {
    var self = this;
    var wl = Horatio.Wordlists;
    
    wl.characters            .forEach(function(w) { self.dictionary[w] = 10; });
    wl.articles              .forEach(function(w) { self.dictionary[w] = 11; });
    wl.be                    .forEach(function(w) { self.dictionary[w] = 12; });
    wl.act                   .forEach(function(w) { self.dictionary[w] = 13; });
    wl.scene                 .forEach(function(w) { self.dictionary[w] = 14; });
    wl.enter                 .forEach(function(w) { self.dictionary[w] = 15; });
    wl.exit                  .forEach(function(w) { self.dictionary[w] = 16; });
    wl.exeunt                .forEach(function(w) { self.dictionary[w] = 17; });
    
    //wl.input                 .forEach(function(w) { self.dictionary[w] = 20; });
    wl.input_integer         .forEach(function(w) { self.dictionary[w] = 21; });
    wl.input_char            .forEach(function(w) { self.dictionary[w] = 22; });
    //wl.output                .forEach(function(w) { self.dictionary[w] = 23; });
    wl.output_integer        .forEach(function(w) { self.dictionary[w] = 24; });
    wl.output_char           .forEach(function(w) { self.dictionary[w] = 25; });
    
    wl.imperatives           .forEach(function(w) { self.dictionary[w] = 30; });
    wl.to                    .forEach(function(w) { self.dictionary[w] = 31; });
    wl.return                .forEach(function(w) { self.dictionary[w] = 32; });
    
    wl.positive_comparatives .forEach(function(w) { self.dictionary[w] = 40; });
    wl.negative_comparatives .forEach(function(w) { self.dictionary[w] = 41; });
    wl.as                    .forEach(function(w) { self.dictionary[w] = 42; });
    wl.not                   .forEach(function(w) { self.dictionary[w] = 43; });
    wl.than                  .forEach(function(w) { self.dictionary[w] = 44; });
    wl.if_so                 .forEach(function(w) { self.dictionary[w] = 45; });
    wl.be_comparatives       .forEach(function(w) { self.dictionary[w] = 46; });
    
    wl.unary_operators       .forEach(function(w) { self.dictionary[w] = 50; });
    wl.arithmetic_operators  .forEach(function(w) { self.dictionary[w] = 51; });
    
    wl.remember              .forEach(function(w) { self.dictionary[w] = 60; });
    wl.recall                .forEach(function(w) { self.dictionary[w] = 61; });
    
    wl.first_person_pronouns .forEach(function(w) { self.dictionary[w] = 70; });
    wl.second_person_pronouns.forEach(function(w) { self.dictionary[w] = 71; });
    wl.positive_adjectives   .forEach(function(w) { self.dictionary[w] = 72; });
    wl.neutral_adjectives    .forEach(function(w) { self.dictionary[w] = 73; });
    wl.negative_adjectives   .forEach(function(w) { self.dictionary[w] = 74; });
    wl.positive_nouns        .forEach(function(w) { self.dictionary[w] = 75; });
    wl.neutral_nouns         .forEach(function(w) { self.dictionary[w] = 76; });
    wl.negative_nouns        .forEach(function(w) { self.dictionary[w] = 77; });
    wl.roman_numerals        .forEach(function(w) { self.dictionary[w] = 78; });
    
    wl.colon                 .forEach(function(w) { self.dictionary[w] = 90; });
    wl.comma                 .forEach(function(w) { self.dictionary[w] = 91; });
    wl.period                .forEach(function(w) { self.dictionary[w] = 92; });
    wl.exclamation_point     .forEach(function(w) { self.dictionary[w] = 93; });
    wl.question_mark         .forEach(function(w) { self.dictionary[w] = 94; });
    wl.ampersand             .forEach(function(w) { self.dictionary[w] = 95; });
    wl.and                   .forEach(function(w) { self.dictionary[w] = 96; });
    wl.left_bracket          .forEach(function(w) { self.dictionary[w] = 97; });
    wl.right_bracket         .forEach(function(w) { self.dictionary[w] = 98; });
  }

  
};

Horatio.Wordlists = {};
Horatio.Wordlists.act   = ['Act'];
Horatio.Wordlists.scene = ['Scene'];
Horatio.Wordlists.arithmetic_operators = [
  'the sum of',
  'the difference between',
  'the product of',
  'the quotient between',
  'the remainder of the quotient between'
];
Horatio.Wordlists.articles = [
  'a',
  'an',
  'the'
];
Horatio.Wordlists.be = [
  'Thou art',
  'You are',
  'I am'
  //'am',
  //'are',
  //'art',
  //'be',
  //'is'
];

Horatio.Wordlists.be_comparatives = [
  'Art thou',
  'Are you',
  'Am I'
];
Horatio.Wordlists.characters = [
  'Achilles',
  'Adonis',
  'Adriana',
  'Aegeon',
  'Aemilia',
  'Agamemnon',
  'Agrippa',
  'Ajax',
  'Alonso',
  'Andromache',
  'Angelo',
  'Antiochus',
  'Antonio',
  'Arthur',
  'Autolycus',
  'Balthazar',
  'Banquo',
  'Beatrice',
  'Benedick',
  'Benvolio',
  'Bianca',
  'Brabantio',
  'Brutus',
  'Capulet',
  'Cassandra',
  'Cassius',
  'Christopher Sly',
  'Cicero',
  'Claudio',
  'Claudius',
  'Cleopatra',
  'Cordelia',
  'Cornelius',
  'Cressida',
  'Cymberline',
  'Demetrius',
  'Desdemona',
  'Dionyza',
  'Doctor Caius',
  'Dogberry',
  'Don John',
  'Don Pedro',
  'Donalbain',
  'Dorcas',
  'Duncan',
  'Egeus',
  'Emilia',
  'Escalus',
  'Falstaff',
  'Fenton',
  'Ferdinand',
  'Ford',
  'Fortinbras',
  'Francisca',
  'Friar John',
  'Friar Laurence',
  'Gertrude',
  'Goneril',
  'Hamlet',
  'Hecate',
  'Hector',
  'Helen',
  'Helena',
  'Hermia',
  'Hermonie',
  'Hippolyta',
  'Horatio',
  'Imogen',
  'Isabella',
  'John of Gaunt',
  'John of Lancaster',
  'Julia',
  'Juliet',
  'Julius Caesar',
  'King Henry',
  'King John',
  'King Lear',
  'King Richard',
  'Lady Capulet',
  'Lady Macbeth',
  'Lady Macduff',
  'Lady Montague',
  'Lennox',
  'Leonato',
  'Luciana',
  'Lucio',
  'Lychorida',
  'Lysander',
  'Macbeth',
  'Macduff',
  'Malcolm',
  'Mariana',
  'Mark Antony',
  'Mercutio',
  'Miranda',
  'Mistress Ford',
  'Mistress Overdone',
  'Mistress Page',
  'Montague',
  'Mopsa',
  'Oberon',
  'Octavia',
  'Octavius Caesar',
  'Olivia',
  'Ophelia',
  'Orlando',
  'Orsino',
  'Othello',
  'Page',
  'Pantino',
  'Paris',
  'Pericles',
  'Pinch',
  'Polonius',
  'Pompeius',
  'Portia',
  'Priam',
  'Prince Henry',
  'Prospero',
  'Proteus',
  'Publius',
  'Puck',
  'Queen Elinor',
  'Regan',
  'Robin',
  'Romeo',
  'Rosalind',
  'Sebastian',
  'Shallow',
  'Shylock',
  'Slender',
  'Solinus',
  'Stephano',
  'Thaisa',
  'The Abbot of Westminster',
  'The Apothecary',
  'The Archbishop of Canterbury',
  'The Duke of Milan',
  'The Duke of Venice',
  'The Ghost',
  'Theseus',
  'Thurio',
  'Timon',
  'Titania',
  'Titus',
  'Troilus',
  'Tybalt',
  'Ulysses',
  'Valentine',
  'Venus',
  'Vincentio',
  'Viola'
];
Horatio.Wordlists.enter  = ['Enter'];
Horatio.Wordlists.exit   = ['Exit'];
Horatio.Wordlists.exeunt = ['Exeunt'];
Horatio.Wordlists.first_person = [
  'I',
  'i',
  'me'
];
Horatio.Wordlists.first_person_possessive = [
  'mine',
  'my'
];
Horatio.Wordlists.first_person_reflexive = [
  'myself'
];
Horatio.Wordlists.imperatives = [
  'Let us',
  'let us',
  'We shall',
  'we shall',
  'We must',
  'we must'
];

Horatio.Wordlists.to = ['to'];

Horatio.Wordlists.return = [
  'proceed',
  'return'
];
Horatio.Wordlists.input_integer = ['Listen to your heart'];
Horatio.Wordlists.input_char    = ['Open your mind'];
Horatio.Wordlists.input = Horatio.Wordlists.input_integer.concat(Horatio.Wordlists.input_char);

Horatio.Wordlists.output_integer = ['Open your heart'];
Horatio.Wordlists.output_char    = ['Speak your mind'];
Horatio.Wordlists.output = Horatio.Wordlists.output_integer.concat(Horatio.Wordlists.output_char);
Horatio.Wordlists.as    = ['as'];
Horatio.Wordlists.not   = ['not'];
Horatio.Wordlists.than  = ['than'];
Horatio.Wordlists.if_so = ['If so'];
Horatio.Wordlists.and   = ['and'];
Horatio.Wordlists.negative_adjectives = [
  'bad',
  'big',
  'cowardly',
  'cursed',
  'damned',
  'dirty',
  'disgusting',
  'distasteful',
  'dusty',
  'evil',
  'fat',
  'fat-kidneyed',
  'fatherless',
  'foul',
  'hairy',
  'half-witted',
  'horrible',
  'horrid',
  'infected',
  'lying',
  'miserable',
  'misused',
  'oozing',
  'rotten',
  'smelly',
  'snotty',
  'sorry',
  'stinking',
  'stuffed',
  'stupid',
  'vile',
  'villainous',
  'worried'
];
Horatio.Wordlists.negative_comparatives = [
  'punier',
  'smaller',
  'worse'
];
Horatio.Wordlists.negative_nouns = [
  'Hell',
  'Microsoft',
  'bastard',
  'beggar',
  'blister',
  'codpiece',
  'coward',
  'curse',
  'death',
  'devil',
  'draught',
  'famine',
  'flirt-gill',
  'goat',
  'hate',
  'hog',
  'hound',
  'leech',
  'lie',
  'pig',
  'plague',
  'starvation',
  'toad',
  'war',
  'wolf'
];
Horatio.Wordlists.neutral_adjectives = [
  'big',
  'black',
  'blue',
  'bluest',
  'bottomless',
  'furry',
  'green',
  'hard',
  'huge',
  'large',
  'little',
  'normal',
  'old',
  'purple',
  'red',
  'rural',
  'small',
  'tiny',
  'white',
  'yellow'
];
Horatio.Wordlists.neutral_nouns = [
  'animal',
  'aunt',
  'brother',
  'cat',
  'chihuahua',
  'cousin',
  'cow',
  'daughter',
  'door',
  'face',
  'father',
  'fellow',
  'granddaughter',
  'grandfather',
  'grandmother',
  'grandson',
  'hair',
  'hamster',
  'horse',
  'lamp',
  'lantern',
  'mistletoe',
  'moon',
  'morning',
  'mother',
  'nephew',
  'niece',
  'nose',
  'purse',
  'road',
  'roman',
  'sister',
  'sky',
  'son',
  'squirrel',
  'stone wall',
  'thing',
  'town',
  'tree',
  'uncle',
  'wind'
];
Horatio.Wordlists.nothing = [
  'nothing',
  'zero'
];
Horatio.Wordlists.positive_adjectives = [
  'amazing',
  'beautiful',
  'blossoming',
  'bold',
  'black',
  'brave',
  'charming',
  'clearest',
  'cunning',
  'cute',
  'delicious',
  'embroidered',
  'fair',
  'fine',
  'gentle',
  'golden',
  'good',
  'handsome',
  'happy',
  'healthy',
  'honest',
  'little',
  'lovely',
  'loving',
  'mighty',
  'noble',
  'old',
  'peaceful',
  'pretty',
  'prompt',
  'proud',
  'reddest',
  'rich',
  'rural',
  'smooth',
  'sunny',
  'sweet',
  'sweetest',
  'trustworthy',
  'tiny',
  'warm'
];
Horatio.Wordlists.positive_comparatives = [
  'better',
  'bigger',
  'fresher',
  'friendlier',
  'nicer',
  'jollier'
];
Horatio.Wordlists.positive_nouns = [
  'Heaven',
  'King',
  'Lord',
  'angel',
  'flower',
  'happiness',
  'joy',
  'plum',
  'summer\'s day',
  'hero',
  'rose',
  'kingdom',
  'pony',
  'cat'
];
Horatio.Wordlists.first_person_pronouns = [
  //'I',
  'myself',
  'me'
];

Horatio.Wordlists.second_person_pronouns = [
  'you',
  'yourself',
  'thy',
  'thee',
  'thou'
];
Horatio.Wordlists.roman_numerals = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
  'XIII',
  'XIV',
  'XV',
  'XVI',
  'XVII',
  'XVIII',
  'XIX',
  'XX'
];
Horatio.Wordlists.second_person = [
  'thee',
  'thou',
  'you'
];
Horatio.Wordlists.second_person_possessive = [
  'thine',
  'thy',
  'your'
];
Horatio.Wordlists.second_person_reflexive = [
  'thyself',
  'yourself'
];
Horatio.Wordlists.remember = ['Remember'];
Horatio.Wordlists.recall   = ['Recall'];
Horatio.Wordlists.colon             = ['COLON'];
Horatio.Wordlists.comma             = ['COMMA'];
Horatio.Wordlists.period            = ['PERIOD'];
Horatio.Wordlists.exclamation_point = ['EXCLAMATION_POINT'];
Horatio.Wordlists.question_mark     = ['QUESTION_MARK'];
Horatio.Wordlists.ampersand         = ['&'];
Horatio.Wordlists.left_bracket      = ['LEFT_BRACKET'];
Horatio.Wordlists.right_bracket     = ['RIGHT_BRACKET'];
Horatio.Wordlists.third_person_possessive = [
  'his',
  'her',
  'its',
  'their'
];
Horatio.Wordlists.unary_operators = [
  'the square of',
  'the cube of',
  'the square root of',
  'the factorial of',
  'twice'
];