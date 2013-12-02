/**
 * Line Parser
 */
Horatio.LineParser = function(line_array) {
  this.line_array = line_array;
  
  this.type = "value";
  this.value = null;
  this.multiplier = 1;
  this.direction  = 1;
}


Horatio.LineParser.prototype = {
  
  parse: function() {
    var self = this;
    if (self.line_array.length===0) { return null; }
    
    // get word to test
    var str = self.line_array.shift();
    
    /**
     * test and continue parsing if needed.
     * this needs to be broken up/rewritten entirely
     */
    switch(true) {
      
      // Is an article/something
      case self.Expressions.articles().test(str):
        self.parse();
        break;
      
      // Is an adjective
      case self.Expressions.adjectives().test(str):
        if (self.Expressions.negative_adjectives().test(str)) { self.multiplier *= 2; self.direction = -1; self.parse(); }
        if (self.Expressions.positive_adjectives().test(str)) { self.multiplier *= 2; self.direction =  1; self.parse(); }
        break;
      
      // Is a noun
      case self.Expressions.nouns().test(str):
        if (self.Expressions.negative_nouns().test(str)) self.direction = -1;
        self.value = self.direction * self.multiplier;
        return null;
        break;
      
      // Is an operator
      case self.Expressions.operators().test(str):
        var break_point = self.line_array.lastIndexOf("and");
        var left_side  = new Horatio.LineParser(self.line_array.slice(0,break_point));
        var right_side = new Horatio.LineParser(self.line_array.slice(break_point+1));
        
        left_side.parse();
        right_side.parse();
        
        if (str==="sum")        self.value = left_side.value + right_side.value;
        if (str==="difference") self.value = left_side.value - right_side.value;
        if (str==="quotient")   self.value = left_side.value / right_side.value;
        if (str==="product")    self.value = left_side.value * right_side.value;
        
        return null;
        break;
      
      // Is a comparison
      case self.Expressions.comparisons().test(str):
        self.line_array.shift();
        self.line_array.shift();
        self.line_array.shift();
        self.parse();
        break;
    }
  }
  
};