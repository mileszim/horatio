/**
 * Line Parser
 */
Horatio.LineParser = function(line_array) {
  this.line_array = line_array;
  
  this.type = null;
  this.value = null;
  this.multiplier = 1;
  this.direction  = 1;
}


Horatio.LineParser.prototype = {
  
  parse: function() {
    var self = this;
    if (self.line_array.size===0) { console.log("size"); return null; }
    
    // get word to test
    var str = self.line_array.shift();
        
    /**
     * test and continue parsing if needed.
     * this needs to be broken up/rewritten entirely
     */
    switch(true) {
      
      // Is an adjective
      case self.Expressions.adjectives().test(str):
        if (self.Expressions.negative_adjectives().test(str)) { self.multiplier *= 2; self.direction = -1; self.parse(); }
        if (self.Expressions.positive_adjectives().test(str)) { self.multiplier *= 2; self.direction =  1; self.parse(); }
        break;
      
      // Is a noun
      case self.Expressions.nouns().test(str):
        self.value = self.direction * self.multiplier;
        return null;
        break;
    }
  }
  
};