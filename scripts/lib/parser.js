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
    this.clean(this.input_text);
    this.program = new Horatio.Program(this.getTitle());
    this.addCharacters();
    var t = new Horatio.Tokenizer(this.input_array[2]);
    console.log(t.parse());
  },
  
  
  getTitle: function() {
    return this.input_array.shift();
  }
  
};