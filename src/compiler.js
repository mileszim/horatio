/**
 * Compiles SPL into javascript
 * @memberof Horatio
 * @constructor
 */
Horatio.Compiler = function() {};


Horatio.Compiler.prototype = {
  
  /**
   * Compile an SPL program
   * @param {string} input - The input SPL program
   */
  compile: function(input) {
    // Parse input
    var parser = new Horatio.Parser(input);
    
    // Generate AST
    var AST = parser.parse();
    
    // Semantic Check
    var checker = new Horatio.Checker();
    checker.check(AST);
    
    return AST;
  }
  
};