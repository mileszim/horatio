import Generator from './generator';
import Program   from './program';
import Wordlists from './wordlists';

/**
 * Horatio Encoder
 */
export default class Encoder extends Generator {
  constructor(io) {
    super();
    this.program = new Program(io);
  }

  /**
   * Encode
   */
  encode(program) {
    program.visit(this, null);
    return this.program;
  }

  /**
   * Get index number from roman numeral
   */
  numeralIndex(numeral) {
    return Wordlists.roman_numerals.indexOf(numeral);
  }
}
