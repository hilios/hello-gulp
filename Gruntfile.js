module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      dev: {
        files: {
          "/dist/css/result.css": "less/bootstrap.less"
        }
      },
      min: {
        options: {
          compress: true
        },
        files: {
          "/dist/css/bootstrap.min.css": "less/bootstrap.less"
        }
      }
    },
    concat: {
      dev: {
        src: ['js/**/*.js'],
        dest: 'dist/js/bootstrap.js',
      }
    },
    uglify: {
      min: {
        files: {
          'dist/js/bootstrap.min.js': ['dist/js/bootstrap.js']
        }
      }
    },
    copy: {
      fonts: {
        src: 'fonts/**/*'
        dest: 'dest/fonts'
      }
    },
    compress: {
      all: {
        options: {
          archive: 'bootstrap.zip'
        },
        files: {
          src: 'dest/**',
          dest: 'build/'
        }
      }
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['build-js']
      },
      css: {
        files: ['less/**/*.less'],
        tasks: ['build-css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build-fonts', ['copy']);
  grunt.registerTask('build-css', ['less']);
  grunt.registerTask('build-js', ['concat', 'uglify']);
  grunt.registerTask('build', ['build-js', 'build-css', 'build-fonts']);

  grunt.registerTask('pack', ['build', 'compress']);

  grunt.registerTask('default', ['watch']);
}
