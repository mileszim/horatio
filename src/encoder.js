import Generator from 'generator';

/**
 * Horatio Encoder
 */
export default class Encoder extends Generator {
  constructor(io) {
    this.program = new Horatio.Program(io);
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
    return Horatio.Wordlists.roman_numerals.indexOf(numeral);
  }
}
