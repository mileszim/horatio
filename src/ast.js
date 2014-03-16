/**
 * Abstract Syntax Trees
 */
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
  
  IntegerInputSentence: function(sequence) { this.sequence = sequence; },
  CharInputSentence:    function(sequence) { this.sequence = sequence; },
  
  IntegerOutputSentence: function(sequence) { this.sequence = sequence; },
  CharOutputSentence:    function(sequence) { this.sequence = sequence; },
  
  RememberSentence: function(pronoun) {
    this.pronoun = pronoun;
  },
  
  RecallSentence: function(comment) {
    this.comment = comment;
  },
  
  
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