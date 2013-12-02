/**
 * Clean
 */
Horatio.Parser.prototype.Clean = {
  
  lineTerminals: function() {
    var terminals = "["+ Horatio.Wordlists.line_terminals.join("") + "]";
    return new RegExp(terminals);
  },
  
  cleanLine: function(line) {
    return line.trim().replace(/[\s\n]+/g," ");
  },
  
  splitLines: function(text) {
    var lines = text.split(this.lineTerminals());
    return this.cleanLines(lines);
  },
  
  cleanLines: function(lines) {
    var cleaned = [];
    for (var l in lines) {
      var c = this.cleanLine(lines[l]);
      if (c != "") cleaned.push(c);
    }
    return cleaned;
  }
  
};

Horatio.Parser.prototype.clean = function(callback) {
  return this.Clean.splitLines(this.input_text);
};