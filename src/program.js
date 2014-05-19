/**
 * A Horatio Program
 */
Horatio.Program = function() {
  this.characters = {};
  this.parts = [];
  this.stage = [];
};


Horatio.Program.prototype = {
  
  run: function() {
    var self = this;
    
    for (var a = 0; a < self.parts.length; a++) {
      for (var s = 0; s < self.parts[a].length; s++) {
        for (var f = 0; f < self.parts[a][s].length; f++) {
          self.parts[a][s][f].call(self);
        }
      }
    }
    
    return 0;
  },
  
  
  runSub: function(act, start_scene, end_scene) {
    var self = this;
    
    for (var s = start_scene; s < end_scene; s++) {
      for (var f = 0; f < self.parts[act][s].length; f++) {
        self.parts[act][s][f].call(self);
      }
    }
    
    return 0;
  },
  
  
  declareCharacter: function(character_name) {
    this.characters[character_name] = new Horatio.Character(character_name);
  },
  
  
  newAct: function() {
    this.parts.push([]);
    return this.parts.length-1;
  },
  
  
  newScene: function(act) {
    this.parts[act].push([]);
    return this.parts[act].length-1;
  },
  
  
  enterStage: function(character_name) {
    var c = this.characters[character_name];
    this.stage.push(c);
  },
  
  
  exitStage: function(character_name) {
    var c = this.characters[character_name];
    this.stage.splice(this.stage.indexOf(c), 1);
  },
  
  
  exeuntStage: function() {
    this.stage = [];
  },
  
  
  interlocutor: function(character_name) {
    var c = this.characters[character_name];
    var i = this.stage.filter(function(n) { return n === c; });
    return i[0];
  },
  
  
  addCommand: function(act, scene, command) {
    console.log(command);
    this.parts[act][scene].push(command);
    
    var self = this;
  }
  
};