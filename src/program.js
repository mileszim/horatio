/**
 * A Horatio Program
 */
Horatio.Program = function() {
  this.characters = {};
  this.parts = [];
};


Horatio.Program.prototype = {
  
  run: function() {
    console.log('run');
  },
  
  
  declareCharacter: function(character_name) {
    this.characters[character_name] = new Horatio.Character();
  },
  
  
  newAct: function() {
    this.parts.push([]);
  },
  
  
  newScene: function(act) {
    this.parts[act].push([]);
  }
  
};