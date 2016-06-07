'use strict';

module.exports = function(grunt) {

  // Load all NPM tasks to use later.
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['jshint:all', 'ngtemplates', 'uglify', 'clean:temp', 'less', 'copy']);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*\n' +
            ' * <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * (c) 2015-2016 <%= pkg.author %>\n' +
            ' */\n',
    clean: {
      build: ['build/'],
      css: ['app/styles.css'],
      temp: ['temp/']
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
      scripts: {
        src: 'scripts/**/*',
        dest: 'build/'
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
              'lib/bootstrap/dist/fonts/*'
            ],
            dest: 'build/fonts/',
            flatten: true
          }, {
            expand: true,
            src: [
              'vendor/phpmailer/phpmailer/PHPMailerAutoload.php',
              'vendor/phpmailer/phpmailer/class.phpmailer.php',
              'vendor/phpmailer/phpmailer/class.smtp.php'
            ],
            dest: 'build/scripts/',
            flatten: true
          }
        ]
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'app/**/*.js'
      ],
      app: ['app/**/*.js'],
      gruntfile: ['Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc',
        verbose: true
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
      jmwwApp: {
        src: ['app/**/*.html', '!app/index.html'],
        dest: 'temp/templates.js'
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*.js', 'app/**/*.html', 'app/**/*.less', 'scripts/**/*'],
        tasks: ['build'],
        options: {
          spawn: false
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      build: {
        src: ['app/app.module.js', 'app/**/*.js', 'temp/templates.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

};
