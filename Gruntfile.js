'use strict';

var paths = {
		test: ['test'],
		js: ['./']
	},
	files = {
		grunt: ['./gruntfile.js'],
		js: ['./**/*.js', './**/*.json'],
		test: ['./test/*.js']
	};

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: files.js,
        tasks: ['jshint:all']
      },
      test: {
        files: files.test,
        tasks: ['']
      },
      gruntfile: {
        files: files.grunt,
        tasks: ['']
      }
    },
    jshint: {
      all: {
        src: paths.js,
        options: {
          jshintrc: true,
          reporter: require('jshint-stylish')
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  
  grunt.registerTask('default', ['watch:js']);
  grunt.registerTask('build', ['']);
  grunt.registerTask('qa', ['jshint:all']);
};
