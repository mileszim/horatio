import Wordlists from 'wordlists';
import Token     from 'token';

/**
 * SPL Tokenizer
 * @memberof Horatio
 * @param {string} input - An input SPL program
 */
export default class Tokenizer {
  constructor(input) {
    this.tokens = [];
    this.dictionary = {};
    this.buildDictionary();
    this.tokenize(input);
  }

  /**
   * Get the next token
   * @returns {Token|number} - The next token from the input program, or -1 if no remaining tokens.
   */
  nextToken() {
    if (this.tokens.length > 0) {
      return this.tokens.shift();
    } else {
      return -1;
    }
  }


  /**
   * Scan and tokenize an input SPL program
   * @param {string} input - The input SPL program
   */
  tokenize(input) {
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
        var check_next = current+" "+input_array[0];
        if (this.dictionary[check_next]) {
          current = check_next;
          this.tokens.push(new Token(this.dictionary[current], current));
          input_array.splice(0,1);
        } else {
          this.tokens.push(new Token(this.dictionary[current], current));
        }
      } else {

        // check if further appends will find match
        var br = 0;
        var orig = current;
        while (!this.dictionary[current] && br < 6) {
          current = current + " " + input_array[br];

          if (this.dictionary[current]) {
            this.tokens.push(new Token(this.dictionary[current], current));
            input_array.splice(0,br+1);
          }
          br += 1;
        }

        // comment
        if (br===6) this.tokens.push(new Token(43, orig));
      }
    }
  }


  /**
   * Builds a hash of words -> byte codes for scanning
   */
  buildDictionary() {
    var self = this;
    var wl = Wordlists;

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
}
