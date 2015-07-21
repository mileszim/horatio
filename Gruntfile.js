/*global module:false*/
module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');
  var banner = '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n';

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg:    pkg,
    banner: banner,

    // Task configuration.
    browserify: {
      dist: {
        files: {
          'dist/horatio.js': ['src/horatio.js']
        },
        options: {
          transform: ['babelify']
        }
      },
      min: {
        files: {
          'dist/horatio.min.js': ['src/horatio.js']
        },
        options: {
          transform: [['babelify', {
            compact: true,
            comments: false
          }]]
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', ['browserify:dist', 'browserify:min']);

};
