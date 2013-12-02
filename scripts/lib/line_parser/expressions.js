
Horatio.LineParser.prototype.Expressions = {
  
  adjectives: function() {
    var r = "(" + Horatio.Wordlists.negative_adjectives.join("|") + "|" + Horatio.Wordlists.positive_adjectives.join("|") + ")";
    return new RegExp(r);
  },
  
  negative_adjectives: function() {
    var r = "(" + Horatio.Wordlists.negative_adjectives.join("|")+")";
    return new RegExp(r);
  },
  
  positive_adjectives: function() {
    var r = "(" + Horatio.Wordlists.positive_adjectives.join("|")+")";
    return new RegExp(r);
  },
  
  nouns: function() {
    var r = "(" + Horatio.Wordlists.negative_nouns.join("|") + "|" + Horatio.Wordlists.positive_nouns.join("|") + ")";
    return new RegExp(r);
  },
  
  negative_nouns: function() {
    var r = "(" + Horatio.Wordlists.negative_nouns.join("|") + ")";
    return new RegExp(r);
  },
  
  positive_nouns: function() {
    var r = "(" + Horatio.Wordlists.positive_nouns.join("|") + ")";
    return new RegExp(r);
  },
  
  comparisons: function() {
    var r = "(are|art|as)";
    return new RegExp(r);
  }
  
};