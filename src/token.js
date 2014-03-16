/**
 * Tokens
 */
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