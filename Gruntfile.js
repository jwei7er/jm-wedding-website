module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      indexPage: {
        expand: true,
        src: 'app/index.html',
        dest: 'build/',
        flatten: true
      },
      css: {
        expand: true,
        src: 'app/**/*.css',
        dest: 'build/',
        flatten: true
      },
      images: {
        expand: true,
        src: 'app/images/**/*.jpg',
        dest: 'build/img/',
        flatten: true
      },
      lib: {
        files: [
          {
            expand: true,
            cwd: 'lib/',
            src: [
              'angular/angular.min.js',
              'bootstrap/dist/css/bootstrap.min.css',
              'bootstrap/dist/js/bootstrap.min.js',
              'jquery/dist/jquery.min.js'
            ],
            dest: 'build/',
            flatten: true
          }
        ]
      }
    },
    clean: {
      build: ['temp/', 'build/']
    },
    ngtemplates:  {
      myApp:        {
        src:      ['app/**/*.html', '!app/index.html'],
        dest:     'temp/templates.js'
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*.js', 'app/**/*.html', 'app/**/*.less'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        // src: 'src/<%= pkg.name %>.js',
        src: ['app/app.js', 'app/**/*.js', 'temp/templates.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('build', ['ngtemplates', 'uglify', 'copy']);

  // Default task(s).
  grunt.registerTask('default', ['build']);

};
