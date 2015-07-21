/**
 * Horatio Program Character
 */
export default class Character {
  constructor(name) {
    this._name = name;
    this._value  = null;
    this._memory = [];
  }

  /**
   * @returns {string}
   */
  name() {
    return this._name;
  }

  /**
   * @returns {number|null}
   */
  value() {
    return this._value;
  }

  /**
   * @param {number} val
   */
  setValue(val) {
    this._value = val;
  }

  /**
   * @returns {number}
   */
  memorySize() {
    return this.memory.length;
  }

  /**
   * @returns {boolean}
   */
  noMemory() {
    return (this.memory.length===0);
  }

  /**
   * @param {number}
   */
  remember(val) {
    this._memory.push(val);
  }

  /**
   * set character value from top of stack
   */
  recall() {
    if (this.noMemory()) {
      throw new Error("Runtime Error - Trying to recall from empty stack.");
    } else {
      this._value = this._memory.pop();
    }
  }
}
