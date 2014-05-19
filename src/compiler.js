/**
 * Compiles SPL into javascript
 * @memberof Horatio
 * @constructor
 */
Horatio.Compiler = function(io) {
  this.io = io;
};


Horatio.Compiler.prototype = {
  
  /**
   * Compile an SPL program
   * @param {string} input - The input SPL program
   */
  compile: function(input) {
    // Parse input
    var parser = new Horatio.Parser(input);
    
    // Generate AST
    var ast = parser.parse();
    
    // Semantic Check
    var checker = new Horatio.Checker();
    checker.check(ast);
    
    // Code Generation
    var encoder = new Horatio.Encoder(this.io);
    var program = encoder.encode(ast);
    
    return program;
  }
  
};