/**
 * Abstract Syntax Trees for Horatio
 * @memberof Horatio
 * @namespace
 */
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
      return visitor.visitUnaryOperationValue(this, arg);
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