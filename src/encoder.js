/**
 * Horatio Encoder
 */
Horatio.Encoder = function() {
  //Horatio.Visitor.call(this);
};

// inherit visitor prototype
Horatio.Encoder.prototype = new Horatio.Generator();



/**
 * Encode
 */
Horatio.Encoder.prototype.encode = function(program) {
  program.visit(this, null);
};