
Horatio.Parser.prototype.Characters = {
  
  parseCharacter: function(line) {
    return line.match(this.characterReg())[1];
  },
  
  characterReg: function() {
    var r = "("+Horatio.Wordlists.characters.join("|")+")"+Horatio.Wordlists.character_terminal;
    return new RegExp(r);
  }
  
};


Horatio.Parser.prototype.addCharacters = function() {
  var breaker = "Act I";
  while(this.input_array[0] && this.input_array.indexOf(breaker) < 0) {
    var l = this.input_array.shift();
    this.program.createCharacter(this.Characters.parseCharacter(l));
  }
};