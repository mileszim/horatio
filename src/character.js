/**
 * Horatio Program Character
 */
Horatio.Character = function(name) {
  this._name = name;
  this._value  = null;
  this._memory = [];
};


Horatio.Character.prototype = {
  
  /**
   * @returns {string}
   */
  name: function() {
    return this._name;
  },
  
  
  /**
   * @returns {number|null}
   */
  value: function() {
    return this._value;
  },
  
  
  /**
   * @param {number} val
   */
  setValue: function(val) {
    this._value = val;
  },
  
  
  /**
   * @returns {number}
   */
  memorySize: function() {
    return this.memory.length;
  },
  
  
  /**
   * @returns {boolean}
   */
  noMemory: function() {
    return (this.memory.length===0);
  },
  
  
  /**
   * @param {number}
   */
  remember: function(val) {
    this._memory.push(val);
  },
  
  
  /**
   * set character value from top of stack
   */
  recall: function() {
    if (this.noMemory()) {
      throw new Error("Runtime Error - Trying to recall from empty stack.");
    } else {
      this._value = this._memory.pop();
    }
  }
  
  
};