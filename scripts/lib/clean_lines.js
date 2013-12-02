/**
 * Clean Lines
 */

Horatio.CleanLines = {

  lineTerminals: function() {
    var terminals = "["+ Horatio.Wordlists.line_terminals.join("") + "]";
    return new RegExp(terminals);
  },

  cleanLine: function(line) {
    return line.trim().replace(/[\s\n]+/g," ");
  },

  clean: function(text) {
    var lines = text.split(Horatio.CleanLines.lineTerminals());
    return Horatio.CleanLines.cleanLines(lines);
  },

  cleanLines: function(lines) {
    var cleaned = [];
    for (var l in lines) {
      var c = Horatio.CleanLines.cleanLine(lines[l]);
      if (c != "") cleaned.push(c);
    }
    return cleaned;
  }

};