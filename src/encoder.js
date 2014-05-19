/**
 * Horatio Encoder
 */
Horatio.Encoder = function(io) {
  this.program = new Horatio.Program(io);
};

// inherit visitor prototype
Horatio.Encoder.prototype = new Horatio.Generator();



/**
 * Encode
 */
Horatio.Encoder.prototype.encode = function(program) {
  program.visit(this, null);
  return this.program;
};



/**
 * Get index number from roman numeral
 */
Horatio.Encoder.prototype.numeralIndex = function(numeral) {
  return Horatio.Wordlists.roman_numerals.indexOf(numeral);
};