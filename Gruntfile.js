'use strict';

var paths = {
		test: ['test'],
		js: ['./'],
        build: ['dist']
	},
	files = {
		grunt: ['./Gruntfile.js'],
		js: ['datastats.js', 'package.json', 'Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
		test: ['test/**/*.js']
	};

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        js: {
            files: files.js,
            tasks: ['jshint:all', 'mochaTest:test', 'clean', 'concat:dist']
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
    },
    concat: {
		options: {
		  separator: '\n',
		},
		dist: {
		  src: ['src/datastatsBegin.js', 'src/datastatsStats.js', 'src/datastatsEnd.js'],
		  dest: 'dist/datastats.js',
		}
	},
    clean: paths.build
  });

  require('load-grunt-tasks')(grunt);
  
  grunt.registerTask('default', ['watch:js']);
  grunt.registerTask('build', ['clean', 'concat:dist']);
  grunt.registerTask('qa', ['jshint:all']);
  grunt.registerTask('test', ['mochaTest:test']);
};
