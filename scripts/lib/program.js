/**
 * Program
 */
Horatio.Program = function(title) {
  
  this.title = title;
  this.characters = {};
  this.acts = {};
  
};


Horatio.Program.prototype = {
  
  addCharacter: function(character) {
    this.characters[character.name] = character;
  },
  
  createCharacter: function(character_name) {
    this.characters[character_name] = new Horatio.Program.Character(character_name);
  },
  
  addAct: function(act) {
    this.acts[act.num] = act;
  },
  
  createAct: function(act_num) {
    this.acts[act_num] = new Horatio.Program.Act(act_num);
  }
  
};