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
Horatio.Token.CHARACTER             = 10;
Horatio.Token.ARTICLE               = 11;
Horatio.Token.BE                    = 12;
Horatio.Token.ACT                   = 13;
Horatio.Token.SCENE                 = 14;
Horatio.Token.ENTER                 = 15;
Horatio.Token.EXIT                  = 16;
Horatio.Token.EXEUNT                = 17;

//Horatio.Token.INPUT                 = 20;
Horatio.Token.INPUT_INTEGER         = 21;
Horatio.Token.INPUT_CHAR            = 22;
//Horatio.Token.OUTPUT                = 23;
Horatio.Token.OUTPUT_INTEGER        = 24;
Horatio.Token.OUTPUT_CHAR           = 25;
  
Horatio.Token.IMPERATIVE            = 30;
Horatio.Token.TO                    = 31;
Horatio.Token.RETURN                = 32;
  
Horatio.Token.POSITIVE_COMPARATIVE  = 40;
Horatio.Token.NEGATIVE_COMPARATIVE  = 41;
Horatio.Token.AS                    = 42;
Horatio.Token.NOT                   = 43;
Horatio.Token.THAN                  = 44;
Horatio.Token.IF_SO                 = 45;
Horatio.Token.BE_COMPARATIVE        = 46;
  
Horatio.Token.UNARY_OPERATOR        = 50;
Horatio.Token.ARITHMETIC_OPERATOR   = 51;
  
Horatio.Token.REMEMBER              = 60;
Horatio.Token.RECALL                = 61;
  
Horatio.Token.FIRST_PERSON_PRONOUN  = 70;
Horatio.Token.SECOND_PERSON_PRONOUN = 71;
Horatio.Token.POSITIVE_ADJECTIVE    = 72;
Horatio.Token.NEUTRAL_ADJECTIVE     = 73;
Horatio.Token.NEGATIVE_ADJECTIVE    = 74;
Horatio.Token.POSITIVE_NOUN         = 75;
Horatio.Token.NEUTRAL_NOUN          = 76;
Horatio.Token.NEGATIVE_NOUN         = 77;
Horatio.Token.ROMAN_NUMERAL         = 78;
  
Horatio.Token.COLON                 = 90;
Horatio.Token.COMMA                 = 91;
Horatio.Token.PERIOD                = 92;
Horatio.Token.EXCLAMATION_POINT     = 93;
Horatio.Token.QUESTION_MARK         = 94;
Horatio.Token.AMPERSAND             = 95;
Horatio.Token.AND                   = 96;
Horatio.Token.LEFT_BRACKET          = 97;
Horatio.Token.RIGHT_BRACKET         = 98;
  
Horatio.Token.COMMENT               = 110;