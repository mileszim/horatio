/**
 * Compiler
 */
Horatio.Compiler = function() {};


Horatio.Compiler.prototype = {
  
  /**
   * Compile an SPL program
   */
  compile: function(input) {
    // Parse input
    var parser = new Horatio.Parser(input);
    var AST = parser.parse();
    
    
    return AST;
  }
  
};