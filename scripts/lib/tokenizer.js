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
      return { type: "act", content: line_array[1].trim().replace(/[:\[,]+/g, "") };
    },
    
    
    "Scene":  function(line_array) {
      return { type: "scene", content: line_array[1].trim().replace(/[:\[,]+/g, "") };
    },
    
    
    "Enter": function(line_array) {
      var characters = [line_array[1]];
      if (line_array[2]==="and") characters.push(line_array[3]);
      return { type: "enter_characters", content: characters };
    },
    
    
    "Exit":  function(line_array) {
      return "exit";
    },
    
    
    "Exeunt":  function(line_array) {
      return "exeunt";
    },
    
    
    "You":    function(line_array) {
      var lp = new Horatio.LineParser(line_array.slice(1));
      lp.parse();
      return { type: "value", content: lp.value };
    }
  },
  
  
  
  
  clean: function(word) {
    return word.trim().replace(/[:\[,]+/g,"");
  },
  
  
  parse: function() {
    var check = this.line[0];
    if (check==="Act"||check==="Scene"||check==="You") {
      return this.types[this.clean(check)](this.line);
    } else {
      return { type: null }
    }
  }
  
};