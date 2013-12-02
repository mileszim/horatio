/**
 * Character
 */
Horatio.Program.Character = function(name) {
  this.name = name;
  this.values = [];
};


Horatio.Program.Character.prototype = {
  
  peek: function() {
    return this.values[0] || null;
  },
  
  val: function() {
    return this.peek();
  },
  
  push: function(value) {
    this.values.unshift(value);
  },
  
  pop: function() {
    return this.values.shift();
  }
  
};