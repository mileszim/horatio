$(function() {

  var editor = ace.edit("editor");
    	//editor.setTheme("ace/theme/github");
    	editor.getSession().setTabSize(2);
    	editor.getSession().setUseSoftTabs(true);
    	//editor.getSession().setMode("ace/mode/javascript");

  var io = new IO();
  var compiler = new Horatio(io);

  $('#run_program').click(function() {
    var spl_input = editor.getValue();

    var program;
    try {
      io.compile();
      program = compiler.compile(spl_input);
    } catch (e) {
      io.print(e);
    }

    try {
      io.run();
      program.run();
      io.print("\n(execution finished)");
    } catch (e) {
      io.print(e);
    }

  });

});
