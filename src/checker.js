import Semantics from './semantics';

/**
 * Horatio Checker
 */
export default class Checker extends Semantics {
  constructor() {
    super();
    this.characters = {};
    this.parts = {};
  }

  /**
   * Check
   */
  check(program) {
    program.visit(this, null);
  }

  /**
   * Character exists
   */
  declared(character) {
    return this.characters.hasOwnProperty(character);
  }

  /**
   * Character on stage
   */
  onStage(character) {
    if (this.declared(character)) {
      return this.characters[character];
    } else {
      return false;
    }
  }

  /**
   * Solo on stage?
   */
  solo(character) {
    if (this.declared(character) && this.characters[character]) {
      for (let k in this.characters) {
        if ((k!==character) && (this.characters[k]===true)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  /**
   * Toggle Stage presence
   */
  toggleStage(character) {
    if (this.declared(character)) {
      this.characters[character] = !this.characters[character];
    }
  }

  /**
   * Exeunt all
   */
  exeuntStage() {
    for (let c in this.characters) {
      this.characters[c] = false;
    }
  }

  /**
   * Scene exists
   */
  sceneExists(act, scene) {
    if (!this.parts[act]) {
      return false;
    } else {
      return (this.parts[act].indexOf(scene) !== -1);
    }
  }
}
