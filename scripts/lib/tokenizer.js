/**
 * Tokenizer
 */
Horatio.Tokenizer = function(line) {
  this.line = line;
  this.type = null;
  if (typeof line === 'string') this.line = line.split(" ");
}


Horatio.Tokenizer.prototype = {
  
  
  types: {
    "Act":    function(line_array) {
      return { type: "act", content: this.clean(line_array[1]) };
    },
    
    
    "Scene":  function(line_array) {
      return { type: "scene", content: this.clean(line_array[1]) };
    },
    
    
    "Enter": function(line_array) {
      var characters = [line_array[1]];
      if (line_array[2]==="and") characters.push(line_array[3]);
      return { type: "enter_characters", content: characters }
    },
    
    
    "Exit":  function(line_array) {
      return "exit";
    },
    
    
    "You":    function(line_array) {
      
    }
  },
  
  
  
  
  clean: function(word) {
    return word.trim().replace(/[:\[,]+/g,"");
  },
  
  
  parse: function() {
    var check = this.line[0];
    return this.types[this.clean(check)](this.line);
  }
  
};