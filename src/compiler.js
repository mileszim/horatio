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
    let parser = new Parser(input);

    // Generate AST
    let ast = parser.parse();

    // Semantic Check
    let checker = new Checker();
    checker.check(ast);

    // Code Generation
    let encoder = new Encoder(this.io);
    let program = encoder.encode(ast);

    return program;
  }
}
