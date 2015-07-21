import Character from './character';

/**
 * A Horatio Program
 */
export default class Program {
  constructor(io) {
    this.io = io;
    this.characters = {};
    this.parts = [];
    this.stage = [];
  }

  run() {
    let self = this;
    for (let a = 0; a < self.parts.length; a++) {
      for (let s = 0; s < self.parts[a].length; s++) {
        for (let f = 0; f < self.parts[a][s].length; f++) {
          self.parts[a][s][f].call(self);
        }
      }
    }
    console.log(this);
    return 0;
  }

  runSub(act, start_scene, end_scene) {
    let self = this;
    for (let s = start_scene; s < end_scene; s++) {
      for (let f = 0; f < self.parts[act][s].length; f++) {
        self.parts[act][s][f].call(self);
      }
    }
    return 0;
  }

  declareCharacter(character_name) {
    this.characters[character_name] = new Character(character_name);
  }

  newAct() {
    this.parts.push([]);
    return this.parts.length-1;
  }

  newScene(act) {
    this.parts[act].push([]);
    return this.parts[act].length-1;
  }

  enterStage(character_name) {
    let c = this.characters[character_name];
    this.stage.push(c);
  }

  exitStage(character_name) {
    let c = this.characters[character_name];
    this.stage.splice(this.stage.indexOf(c), 1);
  }

  exeuntStage() {
    this.stage = [];
  }

  interlocutor(character_name) {
    let c = this.characters[character_name];
    let i = this.stage.filter(function(n) { return n !== c; });
    return i[0];
  }

  addCommand(act, scene, command) {
    this.parts[act][scene].push(command);
    let self = this;
  }
}
