//var input = "Prime Number Computation in Copenhagen.\n\nRomeo, a young man of Verona.\nJuliet, a young woman.\nHamlet, a temporary variable from Denmark.\nThe Ghost, a limiting factor (and by a remarkable coincidence also\n        Hamlet's father).\nAct I: Hamlet's insults and flattery.\nScene I: The insulting of Romeo.\n[Enter Hamlet and Romeo]\n\nHamlet:\nYou lying stupid fatherless big smelly half-witted coward!\nYou are as stupid as the difference between a handsome rich brave\nhero and thyself! Speak your mind!";
//var p = new Horatio.Parser(input);
//console.log(p);
//p.parse();
//console.log(p);




var Main = Main || {};

Main.LineParser = function(input) {
  this.lines     = new Horatio.CleanLines.clean(input);
  this.tokenized = new Horatio.Tokenizer(this.lines[0]);
  this.parsed    = this.tokenized.parse();
};


$(function() {
  
  // Line parsing submitted
  $("#line_parsing_form").submit(function(event) {
    event.preventDefault();
    var line_input = $("#line_parsing_input").val();
    var response = new Main.LineParser(line_input).parsed;
    
    if (response.content) $("#line_parsing_output").text(response.content);
  });
  
});