/**
 * Parser
 */
Horatio.Parser = function(input) {
  this.tokenizer    = new Horatio.Tokenizer(input);
  this.currentToken = null;
}

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
    this.parseProgram();
    if (this.currentToken !== -1) {
      throw new Error("Syntax Error - unexpected end of program");
    }
    console.log("Valid!");
  },
  
  
  
  /**
   * Parsers
   */
  parseProgram: function() {
    this.parseComment();
    this.accept(Horatio.Token.PERIOD);
    this.parseDeclaration();
    while (this.currentToken.kind===Horatio.Token.CHARACTER) {
      this.parseDeclaration();
    }
    this.parsePart();
    while (this.currentToken.kind===Horatio.Token.ACT) {
      this.parsePart();
    }
  },
  
  
  parseComment: function() {
    while (this.currentToken.kind!==Horatio.Token.PERIOD) {
      this.acceptIt();
    }
  },
  
  
  parseDeclaration: function() {
    this.accept(Horatio.Token.CHARACTER);
    this.accept(Horatio.Token.COMMA);
    this.parseComment();
    this.accept(Horatio.Token.PERIOD);
  },
  
  
  parsePart: function() {
    this.accept(Horatio.Token.ACT);
    this.accept(Horatio.Token.ROMAN_NUMERAL);
    this.accept(Horatio.Token.COLON);
    while (this.currentToken.kind!==Horatio.Token.PERIOD) {
      this.acceptIt();
    }
    this.accept(Horatio.Token.PERIOD);
    this.parseSubPart();
    while (this.currentToken.kind===Horatio.Token.SCENE) {
      this.parseSubPart();
    }
  },
  
  
  parseSubPart: function() {
    this.accept(Horatio.Token.SCENE);
    this.accept(Horatio.Token.ROMAN_NUMERAL);
    this.accept(Horatio.Token.COLON);
    while (this.currentToken.kind!==Horatio.Token.PERIOD) {
      this.acceptIt();
    }
    this.accept(Horatio.Token.PERIOD);
    this.parseStage();
  },
  
  
  parseStage: function() {
    if (this.currentToken.kind===Horatio.Token.LEFT_BRACKET) {
      this.parsePresence();
    }
    this.parseDialogue();
    if (this.currentToken.kind===Horatio.Token.LEFT_BRACKET) {
      this.parsePresence();
    }
  },
  
  
  parsePresence: function() {
    this.accept(Horatio.Token.LEFT_BRACKET);
    switch (this.currentToken.kind) {
      
      case Horatio.Token.ENTER:
        this.acceptIt();
        this.accept(Horatio.Token.CHARACTER);
        if (this.currentToken.kind===Horatio.Token.AMPERSAND) {
          this.acceptIt();
          this.accept(Horatio.Token.CHARACTER);
        }
        break;
        
      case Horatio.Token.EXIT:
        this.acceptIt();
        this.accept(Horatio.Token.CHARACTER);
        break;
      
      case Horatio.Token.EXEUNT:
        this.acceptIt();
        if (this.currentToken.kind===Horatio.Token.CHARACTER) {
          this.acceptIt();
          this.accept(Horatio.Token.AMPERSAND);
          this.accept(Horatio.Token.CHARACTER);
        }
    }
    this.accept(Horatio.Token.RIGHT_BRACKET);
  },
  
  
  parseDialogue: function() {
    this.parseLine();
    while (this.currentToken.kind===Horatio.Token.CHARACTER) {
      this.parseLine();
    }
  },
  
  
  parseLine: function() {
    this.accept(Horatio.Token.CHARACTER);
    this.accept(Horatio.Token.COLON);
    this.parseSentence();
    while (this.currentToken.kind===Horatio.Token.BE
        || this.currentToken.kind===Horatio.Token.BE_COMPARATIVE
        || this.currentToken.kind===Horatio.Token.IF_SO
        || this.currentToken.kind===Horatio.Token.IMPERATIVE
        || this.currentToken.kind===Horatio.Token.INPUT
        || this.currentToken.kind===Horatio.Token.OUTPUT
        || this.currentToken.kind===Horatio.Token.REMEMBER
        || this.currentToken.kind===Horatio.Token.RECALL) {
      this.parseSentence();
    }
    
  },
  
  
  parseSentence: function() {
    switch (this.currentToken.kind) {
      
      case Horatio.Token.BE:
        this.parseAssignment();
        this.accept(Horatio.Token.PERIOD);
        break;
        
      case Horatio.Token.BE_COMPARATIVE:
        this.parseQuestion();
        this.accept(Horatio.Token.QUESTION_MARK);
        break;
      
      case Horatio.Token.IF_SO:
        this.parseResponse();
        this.accept(Horatio.Token.PERIOD);
        break;
      
      case Horatio.Token.IMPERATIVE:
        this.parseGoto();
        this.accept(Horatio.Token.PERIOD);
        break;
      
      case Horatio.Token.INPUT:
        this.parseInput();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.OUTPUT:
        this.parseOutput();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.REMEMBER:
        this.parseRemember();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.RECALL:
        this.parseRecall();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
    }
  },
  
  
  parseAssignment: function() {
    this.accept(Horatio.Token.BE);
    if (this.currentToken.kind===Horatio.Token.AS) {
      this.acceptIt();
      this.parseAdjective();
      this.accept(Horatio.Token.AS);
    }
    this.parseValue();
  },
  
  
  parseValue: function() {
    switch (this.currentToken.kind) {
      
      case Horatio.Token.UNARY_OPERATOR:
        this.parseUnaryOperation();
        break;
      
      case Horatio.Token.ARITHMETIC_OPERATOR:
        this.parseArithmeticOperation();
        break;
      
      case Horatio.Token.POSITIVE_NOUN:
      case Horatio.Token.NEUTRAL_NOUN:
      case Horatio.Token.NEGATIVE_NOUN:
      case Horatio.Token.ARTICLE:
        this.parseConstant();
        break;
        
      case Horatio.Token.FIRST_PERSON_PRONOUN:
      case Horatio.Token.SECOND_PERSON_PRONOUN:
        this.acceptIt();
        break;
    }
  },
  
  
  parseUnaryOperation: function() {
    this.accept(Horatio.Token.UNARY_OPERATOR);
    this.parseValue();
  },
  
  
  parseArithmeticOperation: function() {
    this.accept(Horatio.Token.ARITHMETIC_OPERATOR);
    this.parseValue();
    this.accept(Horatio.Token.AND);
    this.parseValue();
  },
  
  
  parseConstant: function() {
    if (this.currentToken.kind===Horatio.Token.ARTICLE) {
      this.acceptIt();
    }
    switch (this.currentToken.kind) {
      
      case Horatio.Token.POSITIVE_ADJECTIVE:
      case Horatio.Token.POSITIVE_NOUN:
        this.parsePositiveConstant();
        break;
      
      case Horatio.Token.NEGATIVE_ADJECTIVE:
      case Horatio.Token.NEGATIVE_NOUN:
        this.parseNegativeConstant();
        break;
        
    }
  },
  
  
  parsePositiveConstant: function() {
    while (this.currentToken.kind!==Horatio.Token.POSITIVE_NOUN) {
      switch (this.currentToken.kind) {
        case Horatio.Token.POSITIVE_ADJECTIVE:
        case Horatio.Token.NEUTRAL_ADJECTIVE:
          this.acceptIt();
      }
    }
    this.accept(Horatio.Token.POSITIVE_NOUN);
  },
  
  
  parseNegativeConstant: function() {
    while (this.currentToken.kind!==Horatio.Token.NEGATIVE_NOUN) {
      switch (this.currentToken.kind) {
        case Horatio.Token.NEGATIVE_ADJECTIVE:
        case Horatio.Token.NEUTRAL_ADJECTIVE:
          this.acceptIt();
      }
    }
    this.accept(Horatio.Token.NEGATIVE_NOUN);
  },
  
  
  parseQuestion: function() {
    this.accept(Horatio.Token.BE_COMPARATIVE);
    this.parseComparative();
    this.parseValue();
  },
  
  
  parseComparative: function() {
    switch (this.currentToken.kind) {
      
      case Horatio.Token.POSITIVE_COMPARATIVE:
      case Horatio.Token.NEGATIVE_COMPARATIVE:
        this.acceptIt();
        this.accept(Horatio.Token.THAN);
        break;
        
      case Horatio.Token.AS:
        this.acceptIt();
        this.parseAdjective();
        this.accept(Horatio.Token.AS);
        break;
      
      case Horatio.Token.NOT:
        this.acceptIt();
        switch (this.currentToken.kind) {
          case Horatio.Token.POSITIVE_COMPARATIVE:
          case Horatio.Token.NEGATIVE_COMPARATIVE:
            this.acceptIt();
            this.accept(Horatio.Token.THAN);
            break;
        }
        break;
    }
  },
  
  
  parseResponse: function() {
    this.accept(Horatio.Token.IF_SO);
    this.accept(Horatio.Token.COMMA);
    this.parseGoto();
  },
  
  
  parseGoto: function() {
    this.accept(Horatio.Token.IMPERATIVE);
    this.accept(Horatio.Token.RETURN);
    this.accept(Horatio.Token.TO);
    this.accept(Horatio.Token.SCENE);
    this.accept(Horatio.Token.ROMAN_NUMERAL);
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