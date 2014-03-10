/**
 * Tokenizer
 */
Horatio.Tokenizer = function() {
  this.tokens = [];
  this.dictionary = {};
  this.buildDictionary();
}


Horatio.Tokenizer.prototype = {
  
  tokenize: function(input) {
    // strip all newlines/extra whitespace
    input = input.trim().replace(/[\s\n]+/g," ");
    
    // replace terminals
    input = input.replace(/[:,.!?\[\]]/g, function(match) {
      switch(match) {
        case ":": return " COLON";             break;
        case ",": return " COMMA";             break;
        case ".": return " PERIOD";            break;
        case "!": return " EXCLAMATION_POINT"; break;
        case "?": return " QUESTION_MARK";     break;
        case "[": return " LEFT_BRACKET";      break;
        case "]": return " RIGHT_BRACKET";     break;
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
        if (br===6) this.tokens.push(new Horatio.Token(42, orig));
      }
    }
    console.log(this.tokens);
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
    wl.unary_operators       .forEach(function(w) { self.dictionary[w] = 20; });
    wl.arithmetic_operators  .forEach(function(w) { self.dictionary[w] = 21; });
    wl.remember              .forEach(function(w) { self.dictionary[w] = 22; });
    wl.recall                .forEach(function(w) { self.dictionary[w] = 23; });
    wl.first_person_pronouns .forEach(function(w) { self.dictionary[w] = 24; });
    wl.second_person_pronouns.forEach(function(w) { self.dictionary[w] = 25; });
    wl.positive_adjectives   .forEach(function(w) { self.dictionary[w] = 26; });
    wl.neutral_adjectives    .forEach(function(w) { self.dictionary[w] = 27; });
    wl.negative_adjectives   .forEach(function(w) { self.dictionary[w] = 28; });
    wl.positive_nouns        .forEach(function(w) { self.dictionary[w] = 29; });
    wl.neutral_nouns         .forEach(function(w) { self.dictionary[w] = 30; });
    wl.negative_nouns        .forEach(function(w) { self.dictionary[w] = 31; });
    wl.roman_numerals        .forEach(function(w) { self.dictionary[w] = 32; });
    wl.colon                 .forEach(function(w) { self.dictionary[w] = 33; });
    wl.comma                 .forEach(function(w) { self.dictionary[w] = 34; });
    wl.period                .forEach(function(w) { self.dictionary[w] = 35; });
    wl.exclamation_point     .forEach(function(w) { self.dictionary[w] = 36; });
    wl.question_mark         .forEach(function(w) { self.dictionary[w] = 37; });
    wl.ampersand             .forEach(function(w) { self.dictionary[w] = 38; });
    wl.and                   .forEach(function(w) { self.dictionary[w] = 39; });
    wl.left_bracket          .forEach(function(w) { self.dictionary[w] = 40; });
    wl.right_bracket         .forEach(function(w) { self.dictionary[w] = 41; });
  }

  
};