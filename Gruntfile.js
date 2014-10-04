'use strict';

var paths = {
		test: ['test'],
		js: ['./']
	},
	files = {
		grunt: ['./Gruntfile.js'],
		js: ['datastats.js', 'package.json', 'Gruntfile.js', 'test/**/*.js'],
		test: ['test/**/*.js']
	};

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: files.js,
        tasks: ['jshint:all', 'mochaTest:test']
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
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'test/results.txt',
          quiet: true
        },
        src: ['test/**/*.js']
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  
  grunt.registerTask('default', ['watch:js']);
  grunt.registerTask('build', ['']);
  grunt.registerTask('qa', ['jshint:all']);
  grunt.registerTask('test', ['mochaTest:test']);
};
