/**
 * SPL Tokens
 * @memberof Horatio
 * @param {number} kind     - The scanned token byte
 * @param {string} sequence - The matched phrase
 * @constructor
 */
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

/** @static */ Horatio.Token.INPUT_INTEGER         = 21;
/** @static */ Horatio.Token.INPUT_CHAR            = 22;
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