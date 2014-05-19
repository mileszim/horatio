/**
 * Horatio Encoder
 */
Horatio.Encoder = function() {
  //Horatio.Visitor.call(this);
  
  this.program = new Horatio.Program();
};

// inherit visitor prototype
Horatio.Encoder.prototype = new Horatio.Generator();



/**
 * Encode
 */
Horatio.Encoder.prototype.encode = function(program) {
  program.visit(this, null);
};



/**
 * Get index number from roman numeral
 */
Horatio.Encoder.prototype.numeralIndex = function(numeral) {
  return Horatio.Wordlists.roman_numerals.indexOf(numeral);
};