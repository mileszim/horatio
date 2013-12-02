var Main = Main || {};

Main.LineParser = function(input) {
  this.lines     = new Horatio.CleanLines.clean(input);
  this.tokenized = new Horatio.Tokenizer(this.lines[0]);
  this.parsed    = this.tokenized.parse();
};

Main.ProgramParser = function(input) {
  var parser = new Horatio.Parser(input);
  parser.parse();
  this.program = parser.program;
}


$(function() {
  
  // Line parsing
  $("#line_parsing_form").submit(function(event) {
    event.preventDefault();
    var line_input = $("#line_parsing_input").val();
    var response = new Main.LineParser(line_input).parsed;
    
    if (response.content) $("#line_parsing_output").text(response.content);
  });
  
  // Program parsing
  $('#program_parsing_form').submit(function(event) {
    event.preventDefault();
    var program_input = $('#program_parsing_input').val();
    var response = new Main.ProgramParser(program_input);
    var program = response.program;
    
    $("#program_title").text(program.title);
    $("#program_characters").text(program.listCharacters());
    $("#program_acts").text(program.num_acts);
    $("#program_scenes").text(program.num_scenes);
    
  });
  
});