/*! horatio - v0.0.0 - 2014-03-15
* https://github.com/mileszim/horatio
* Copyright (c) 2014 ; Licensed  */
var Horatio = Horatio || {};
Horatio.AST = {
  
  Program: function(comment, declarations, parts) {
    this.comment      = comment;
    this.declarations = declarations;
    this.parts        = parts;
  },
  
  
  Declaration: function(character, comment) {
    this.character = character;
    this.comment   = comment;
  },
  
  
  Part: function(numeral, comment, subparts) {
    this.numeral  = numeral;
    this.comment  = comment;
    this.subparts = subparts;
  },
  
  
  Subpart: function(numeral, comment, stage) {
    this.numeral = numeral;
    this.comment = comment;
    this.stage   = stage;
  },
  
  
  Stage: function(dialogue, start_presence, end_presence) {
    this.dialogue       = dialogue;
    this.start_presence = start_presence;
    this.end_presence   = end_presence;
  },
  
  
  Enter: function(character_1, character_2) {
    this.character_1 = character_1;
    this.character_2 = character_2;
  },
  
  Exit: function(character) {
    this.character = character;
  },
  
  Exeunt: function(character_1, character_2) {
    this.character_1 = character_1;
    this.character_2 = character_2;
  },
  
  
  Dialogue: function(lines) {
    this.lines = lines;
  },
  
  
  Line: function(character, sentences) {
    this.character = character;
    this.sentences = sentences;
  },
  
  Goto: function(numeral) {
    this.numeral = numeral;
  },
  
  
  // sentences
  AssignmentSentence: function(value) {
    this.value = value;
  },
  
  QuestionSentence: function(comparison, value) {
    this.comparison = comparison;
    this.value      = value;
  },
  
  ResponseSentence: function(goto) {
    this.goto = goto;
  },
  
  GotoSentence: function(goto) {
    this.goto = goto;
  },
  
  IntegerInputSentence:   function(sequence) { this.sequence = sequence; },
  CharacterInputSentence: function(sequence) { this.sequence = sequence; },
  
  IntegerOutputSentence:   function(sequence) { this.sequence = sequence; },
  CharacterOutputSentence: function(sequence) { this.sequence = sequence; },
  
  RememberSentence: function() {},
  
  RecallSentence: function() {},
  
  
  // Values
  PositiveConstantValue: function(noun, adjectives) {
    this.noun       = noun;
    this.adjectives = adjectives;
  },
  
  NegativeConstantValue: function(noun, adjectives) {
    this.noun       = noun;
    this.adjectives = adjectives;
  },
  
  UnaryOperationValue: function(operator, value) {
    this.operator = operator;
    this.value    = value;
  },
  
  ArithmeticOperationValue: function(operator, value_1, value_2) {
    this.operator = operator;
    this.value_1  = value_1;
    this.value_2  = value_2;
  },
  
  PronounValue: function(pronoun) {
    this.pronoun = pronoun;
  },
  
  
  // Comparatives
  GreaterThanComparison: function(comparative) {
    this.comparative = comparative;
  },
  
  LesserThanComparison: function(comparative) {
    this.comparative = comparative;
  },
  
  EqualToComparison: function(adjective) {
    this.adjective = adjective;
  },
  
  InverseComparison: function(comparison) {
    this.comparison = comparison;
  },
  
  
  
  /**
   * Terminals
   */
  Comment:             function(sequence) { this.sequence = sequence; },
  Numeral:             function(sequence) { this.sequence = sequence; },
  Character:           function(sequence) { this.sequence = sequence; },
  FirstPersonPronoun:  function(sequence) { this.sequence = sequence; },
  SecondPersonPronoun: function(sequence) { this.sequence = sequence; },
  PositiveNoun:        function(sequence) { this.sequence = sequence; },
  NeutralNoun:         function(sequence) { this.sequence = sequence; },
  NegativeNoun:        function(sequence) { this.sequence = sequence; },
  PositiveAdjective:   function(sequence) { this.sequence = sequence; },
  NeutralAdjective:    function(sequence) { this.sequence = sequence; },
  NegativeAdjective:   function(sequence) { this.sequence = sequence; },
  UnaryOperator:       function(sequence) { this.sequence = sequence; },
  ArithmeticOperator:  function(sequence) { this.sequence = sequence; },
  PositiveComparative: function(sequence) { this.sequence = sequence; },
  NegativeComparative: function(sequence) { this.sequence = sequence; }
  
};
Horatio.Parser = function(input) {
  this.tokenizer    = new Horatio.Tokenizer(input);
  this.currentToken = null;
};

Horatio.Parser.prototype = {
  
  accept: function(expectedKind) {
    if (this.currentToken.kind === expectedKind) {
      this.currentToken = this.tokenizer.nextToken();
    } else {
      throw new Error("Syntax Error - Unexpected Token: " + JSON.stringify(this.currentToken));
    }
  },
  
  acceptIt: function() {
    this.currentToken = this.tokenizer.nextToken();
  },
  
  parse: function() {
    this.currentToken = this.tokenizer.nextToken();
    var program = this.parseProgram();
    if (this.currentToken !== -1) {
      throw new Error("Syntax Error - unexpected end of program");
    }
    return program;
  },
  
  
  
  /**
   * Parsers
   */
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
        case Horatio.Token.INPUT:
        case Horatio.Token.OUTPUT:
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
      
      case Horatio.Token.INPUT:
        sentence = this.parseInput();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.OUTPUT:
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
    this.accept(Horatio.Token.INPUT);
  },
  
  
  parseOutput: function() {
    this.accept(Horatio.Token.OUTPUT);
  },
  
  
  parseRemember: function() {
    this.accept(Horatio.Token.REMEMBER);
    switch (this.currentToken.kind) {
      case Horatio.Token.FIRST_PERSON_PRONOUN:
      case Horatio.Token.SECOND_PERSON_PRONOUN:
        this.acceptIt();
    }
  },
  
  
  parseRecall: function() {
    this.accept(Horatio.Token.RECALL);
    this.accept(Horatio.Token.COMMA);
    while (this.currentToken.kind!==Horatio.Token.EXCLAMATION_POINT) {
      this.acceptIt();
    }
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


  
/**
 * Token Constants
 */
Horatio.Token.CHARACTER             = 1;
Horatio.Token.ARTICLE               = 2;
Horatio.Token.BE                    = 3;
Horatio.Token.ACT                   = 4;
Horatio.Token.SCENE                 = 5;
Horatio.Token.ENTER                 = 6;
Horatio.Token.EXIT                  = 7;
Horatio.Token.EXEUNT                = 8;
Horatio.Token.INPUT                 = 9;
Horatio.Token.OUTPUT                = 10;
  
Horatio.Token.IMPERATIVE            = 11;
Horatio.Token.TO                    = 12;
Horatio.Token.RETURN                = 13;
  
Horatio.Token.POSITIVE_COMPARATIVE  = 14;
Horatio.Token.NEGATIVE_COMPARATIVE  = 15;
Horatio.Token.AS                    = 16;
Horatio.Token.NOT                   = 17;
Horatio.Token.THAN                  = 18;
Horatio.Token.IF_SO                 = 19;
Horatio.Token.BE_COMPARATIVE        = 20;
  
Horatio.Token.UNARY_OPERATOR        = 21;
Horatio.Token.ARITHMETIC_OPERATOR   = 22;
  
Horatio.Token.REMEMBER              = 23;
Horatio.Token.RECALL                = 24;
  
Horatio.Token.FIRST_PERSON_PRONOUN  = 25;
Horatio.Token.SECOND_PERSON_PRONOUN = 26;
Horatio.Token.POSITIVE_ADJECTIVE    = 27;
Horatio.Token.NEUTRAL_ADJECTIVE     = 28;
Horatio.Token.NEGATIVE_ADJECTIVE    = 29;
Horatio.Token.POSITIVE_NOUN         = 30;
Horatio.Token.NEUTRAL_NOUN          = 31;
Horatio.Token.NEGATIVE_NOUN         = 32;
Horatio.Token.ROMAN_NUMERAL         = 33;
  
Horatio.Token.COLON                 = 34;
Horatio.Token.COMMA                 = 35;
Horatio.Token.PERIOD                = 36;
Horatio.Token.EXCLAMATION_POINT     = 37;
Horatio.Token.QUESTION_MARK         = 38;
Horatio.Token.AMPERSAND             = 39;
Horatio.Token.AND                   = 40;
Horatio.Token.LEFT_BRACKET          = 41;
Horatio.Token.RIGHT_BRACKET         = 42;
  
Horatio.Token.COMMENT               = 43;
Horatio.Tokenizer = function(input) {
  this.tokens = [];
  this.dictionary = {};
  this.buildDictionary();
  this.tokenize(input);
};


Horatio.Tokenizer.prototype = {
  
  nextToken: function() {
    if (this.tokens.length > 0) {
      return this.tokens.shift();
    } else {
      return -1;
    }
  },
  
  
  
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
  
  
  
  buildDictionary: function() {
    var self = this;
    var wl = Horatio.Wordlists;
    
    wl.characters            .forEach(function(w) { self.dictionary[w] = 1;  });
    wl.articles              .forEach(function(w) { self.dictionary[w] = 2;  });
    wl.be                    .forEach(function(w) { self.dictionary[w] = 3;  });
    wl.act                   .forEach(function(w) { self.dictionary[w] = 4;  });
    wl.scene                 .forEach(function(w) { self.dictionary[w] = 5;  });
    wl.enter                 .forEach(function(w) { self.dictionary[w] = 6;  });
    wl.exit                  .forEach(function(w) { self.dictionary[w] = 7;  });
    wl.exeunt                .forEach(function(w) { self.dictionary[w] = 8;  });
    wl.input                 .forEach(function(w) { self.dictionary[w] = 9;  });
    wl.output                .forEach(function(w) { self.dictionary[w] = 10; });
    wl.imperatives           .forEach(function(w) { self.dictionary[w] = 11; });
    wl.to                    .forEach(function(w) { self.dictionary[w] = 12; });
    wl.return                .forEach(function(w) { self.dictionary[w] = 13; });
    wl.positive_comparatives .forEach(function(w) { self.dictionary[w] = 14; });
    wl.negative_comparatives .forEach(function(w) { self.dictionary[w] = 15; });
    wl.as                    .forEach(function(w) { self.dictionary[w] = 16; });
    wl.not                   .forEach(function(w) { self.dictionary[w] = 17; });
    wl.than                  .forEach(function(w) { self.dictionary[w] = 18; });
    wl.if_so                 .forEach(function(w) { self.dictionary[w] = 19; });
    wl.be_comparatives       .forEach(function(w) { self.dictionary[w] = 20; });
    wl.unary_operators       .forEach(function(w) { self.dictionary[w] = 21; });
    wl.arithmetic_operators  .forEach(function(w) { self.dictionary[w] = 22; });
    wl.remember              .forEach(function(w) { self.dictionary[w] = 23; });
    wl.recall                .forEach(function(w) { self.dictionary[w] = 24; });
    wl.first_person_pronouns .forEach(function(w) { self.dictionary[w] = 25; });
    wl.second_person_pronouns.forEach(function(w) { self.dictionary[w] = 26; });
    wl.positive_adjectives   .forEach(function(w) { self.dictionary[w] = 27; });
    wl.neutral_adjectives    .forEach(function(w) { self.dictionary[w] = 28; });
    wl.negative_adjectives   .forEach(function(w) { self.dictionary[w] = 29; });
    wl.positive_nouns        .forEach(function(w) { self.dictionary[w] = 30; });
    wl.neutral_nouns         .forEach(function(w) { self.dictionary[w] = 31; });
    wl.negative_nouns        .forEach(function(w) { self.dictionary[w] = 32; });
    wl.roman_numerals        .forEach(function(w) { self.dictionary[w] = 33; });
    wl.colon                 .forEach(function(w) { self.dictionary[w] = 34; });
    wl.comma                 .forEach(function(w) { self.dictionary[w] = 35; });
    wl.period                .forEach(function(w) { self.dictionary[w] = 36; });
    wl.exclamation_point     .forEach(function(w) { self.dictionary[w] = 37; });
    wl.question_mark         .forEach(function(w) { self.dictionary[w] = 38; });
    wl.ampersand             .forEach(function(w) { self.dictionary[w] = 39; });
    wl.and                   .forEach(function(w) { self.dictionary[w] = 40; });
    wl.left_bracket          .forEach(function(w) { self.dictionary[w] = 41; });
    wl.right_bracket         .forEach(function(w) { self.dictionary[w] = 42; });
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
Horatio.Wordlists.input = [
  'Listen to your heart',
  'Open your mind'
];

Horatio.Wordlists.output = [
  'Open your heart',
  'Speak your mind'
];
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