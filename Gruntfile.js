module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['temp/', 'build/'],
      css: ['app/styles.css']
    },
    copy: {
      indexPage: {
        expand: true,
        src: 'app/index.html',
        dest: 'build/',
        flatten: true
      },
      css: {
        expand: true,
        src: [
          'lib/bootstrap/dist/css/bootstrap.min.css',
          'app/**/*.css'
        ],
        dest: 'build/css/',
        flatten: true
      },
      images: {
        expand: true,
        src: 'app/images/**/*',
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
              'bootstrap/dist/js/bootstrap.min.js',
              'jquery/dist/jquery.min.js'
            ],
            dest: 'build/',
            flatten: true
          }, {
            expand: true,
            src: [
              'lib/bootstrap/dist/fonts/*',
            ],
            dest: 'build/fonts/',
            flatten: true
          }
        ]
      }
    },
    less: {
      app: {
        files: {
          'app/styles.css': 'app/styles.less'
        }
      }
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

  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['ngtemplates', 'uglify', 'less', 'copy']);

  // Default task(s).
  grunt.registerTask('default', ['build']);

};
