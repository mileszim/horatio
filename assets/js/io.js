/**
 * IO Strategy using jqconsole
 */
var IO = function() {
  this.console = $('#console').jqconsole();
  this.console.SetPromptLabel('>');
  
  this.init();
};

IO.prototype = {
  
  init: function() {
    var self = this;
    this.console.Prompt(true, function(input) {
      self.Write(input + '\n', 'jqconsole-output');
      self.init();
    });
  },
    
  
  compile: function() {
    this.console.Reset();
    this.console.Write('Compiling...\n', 'jqconsole-output');
  },
  
  
  run: function() {
    this.console.Reset();
  },
  
  
  print: function(text) {
    this.console.Write(text.toString()+"\n", 'jqconsole-output');
  }
  
};