/**
 * Horatio Parser
 */
Horatio.Parser = function(input_text) {
  
  this.input_text  = input_text;
  this.input_array = null;
  this.program     = null;
  
};


Horatio.Parser.prototype = {
  
  /**
   * Main parsing function
   */
  parse: function() {
    this.input_array = this.clean();
    this.program = new Horatio.Program(this.getTitle());
    this.addCharacters();
    
    for (var line in this.input_array) {
      var t = (new Horatio.Tokenizer(this.input_array[line])).parse();
      if (t.type==="act")   this.program.num_acts   += 1;
      if (t.type==="scene") this.program.num_scenes += 1;
    }
  },
  
  
  getTitle: function() {
    return this.input_array.shift();
  }
  
};