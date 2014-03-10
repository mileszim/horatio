/**
 * Tokenizer
 */
Horatio.Tokenizer = function() {
  this.tokens = [];
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
    console.log(input_array);
  }

  
};