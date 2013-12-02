/**
 * Act
 */
Horatio.Program.Act = function(num) {
  this.num = num;
  this.scenes = {};
}


Horatio.Program.Act.prototype = {
  
  createScene: function(num) {
    if (!this.scenes[num]) this.scenes[num] = new Scene(num);
  }
  
};