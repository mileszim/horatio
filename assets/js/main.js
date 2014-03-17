$(function() {
  
  var editor = ace.edit("editor");
    	//editor.setTheme("ace/theme/github");
    	editor.getSession().setTabSize(2);
    	editor.getSession().setUseSoftTabs(true);
    	//editor.getSession().setMode("ace/mode/javascript");
  
  var jqconsole = $('#console').jqconsole();
  jqconsole.SetPromptLabel('>')
  var startPrompt = function () {
    // Start the prompt with history enabled.
    jqconsole.Prompt(true, function (input) {
      
      // Output input with the class jqconsole-output.
      jqconsole.Write(input + '\n', 'jqconsole-output');
      // Restart the prompt.
      startPrompt();
    });
  };
  
  $('#run_program').click(function() {
    jqconsole.Reset();
    jqconsole.Write('Compiling...\n', 'jqconsole-output');
    
    var spl_input = editor.getValue();
    var compiler = new Horatio.Compiler();
    
    var output;
    try {
      output = compiler.compile(spl_input);
      jqconsole.Write(output.comment.sequence+"\n", 'jqconsole-output');
    } catch (Error) {
      jqconsole.Write(Error+'\n', 'jqconsole-output');
    }
    
  });

});