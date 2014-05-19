/**
 * Horatio Checker
 */
Horatio.Checker = function() {
  Horatio.Visitor.call(this);
  this.characters = {};
  this.parts = {};
};

// inherit visitor prototype
Horatio.Checker.prototype = new Horatio.Visitor();



/**
 * Check
 */
Horatio.Checker.prototype.check = function(program) {
  program.visit(this, null);
};



/**
 * Character exists
 */
Horatio.Checker.prototype.declared = function(character) {
  return this.characters.hasOwnProperty(character);
};


/**
 * Character on stage
 */
Horatio.Checker.prototype.onStage = function(character) {
  if (this.declared(character) && this.characters[character].on_stage === true) {
    return true;
  } else {
    return false;
  }
};


/**
 * Toggle Stage presence
 */
Horatio.Checker.prototype.toggleStage = function(character) {
  if (this.declared(character)) {
    this.characters[character].on_stage = !this.characters[character].on_stage;
  }
};


/**
 * Exeunt all
 */
Horatio.Checker.prototype.exeuntStage = function() {
  for (var c in this.characters) {
    this.characters[c].on_stage = false;
  }
};



/**
 * Scene exists
 */
Horatio.Checker.prototype.sceneExists = function(act, scene) {
  if (!this.parts[act]) {
    return false;
  } else {
    return (this.parts[act].indexOf(scene) === -1);
  }
};