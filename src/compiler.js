import Parser  from 'parser';
import Checker from 'checker';
import Encoder from 'encoder';

/**
 * Compiles SPL into javascript
 * @memberof Horatio
 */
exports default class Compiler {
  constructor(io) {
    this.io = io;
  }

  /**
   * Compile an SPL program
   * @param {string} input - The input SPL program
   */
  compile(input) {
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
}
