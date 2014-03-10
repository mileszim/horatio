/**
 * Tokens
 */
Horatio.Token = function(token, sequence) {
  this.token    = token;
  this.sequence = sequence;
}

Horatio.Token.prototype = {
  
  /**
   * Token Constants
   */
  CHARACTER:             function() { return this.token === 1;  },
  ARTICLE:               function() { return this.token === 2;  },
  BE:                    function() { return this.token === 3;  },
  ACT:                   function() { return this.token === 4;  },
  SCENE:                 function() { return this.token === 5;  },
  ENTER:                 function() { return this.token === 6;  },
  EXIT:                  function() { return this.token === 7;  },
  EXEUNT:                function() { return this.token === 8;  },
  INPUT:                 function() { return this.token === 9;  },
  OUTPUT:                function() { return this.token === 10; },
  
  IMPERATIVE:            function() { return this.token === 11; },
  TO:                    function() { return this.token === 12; },
  RETURN:                function() { return this.token === 13; },
  
  POSITIVE_COMPARATIVE:  function() { return this.token === 14; },
  NEGATIVE_COMPARATIVE:  function() { return this.token === 15; },
  AS:                    function() { return this.token === 16; },
  NOT:                   function() { return this.token === 17; },
  THAN:                  function() { return this.token === 18; },
  IF_SO:                 function() { return this.token === 19; },
  
  UNARY_OPERATOR:        function() { return this.token === 20; },
  ARITHMETIC_OPERATOR:   function() { return this.token === 21; },
  
  REMEMBER:              function() { return this.token === 22; },
  RECALL:                function() { return this.token === 23; },
  
  FIRST_PERSON_PRONOUN:  function() { return this.token === 24; },
  SECOND_PERSON_PRONOUN: function() { return this.token === 25; },
  POSITIVE_ADJECTIVE:    function() { return this.token === 26; },
  NEUTRAL_ADJECTIVE:     function() { return this.token === 27; },
  NEGATIVE_ADJECTIVE:    function() { return this.token === 28; },
  POSITIVE_NOUN:         function() { return this.token === 29; },
  NEUTRAL_NOUN:          function() { return this.token === 30; },
  NEGATIVE_NOUN:         function() { return this.token === 31; },
  ROMAN_NUMERAL:         function() { return this.token === 32; },
  
  COLON:                 function() { return this.token === 33; },
  COMMA:                 function() { return this.token === 34; },
  PERIOD:                function() { return this.token === 35; },
  EXCLAMATION_POINT:     function() { return this.token === 36; },
  QUESTION_MARK:         function() { return this.token === 37; },
  AMPERSAND:             function() { return this.token === 38; },
  AND:                   function() { return this.token === 39; },
  LEFT_BRACKET:          function() { return this.token === 40; },
  RIGHT_BRACKET:         function() { return this.token === 41; },
  
  COMMENT:               function() { return this.token === 42; }
  
};