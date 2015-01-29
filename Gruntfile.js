module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'public/javascripts/global.js',
                    'public/javascripts/libs/*.js'
                ],
                dest: 'public/javascripts/build/production.js',
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %>-v<%= pkg.version %>' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: 'public/javascripts/build/production.js',
                dest: 'public/javascripts/build/production.min.js'
            }
        },

        /**
        *   Solves require('module') frontend problem
        */
        browserify: {
            dist: {
                src: 'public/javascripts/build/production.js',
                dest: 'public/javascripts/build/bundle.js'
            }
        },

        /**
        *   Sends notification
        */
        notify: {
            browserify: {
              options: {
                title: 'Grunt Javascript',
                message: 'Concatenate, Browserify, Uglify complete!'
              }
            },
            watch: {
              options: {
                title: 'Task Complete',  // optional
                message: 'SASS and Uglify finished running', //required
              }
            },
            server: {
              options: {
                message: 'Server is ready!'
              }
            }
        },

        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, // maximum number of notifications from jshint output
                title: "Dropzone App", // defaults to the name in package.json, or will use project directory's name
                success: false, // whether successful grunt executions should be notified automatically
                duration: 4 // the duration of notification in seconds, for `notify-send only
            }
        },

        /**
        *   Javascript bug feedback
        */
        // jshint: {
        //     src: ['./Gruntfile.js', 'src/app/**/*.js', 'src/config.js', 'tests/app/**/*.js'],
        //         options: {
        //             curly: true,
        //             eqeqeq: true,
        //             immed: true,
        //             latedef: true,
        //             newcap: true,
        //             noarg: true,
        //             sub: true,
        //             undef: true,
        //             boss: true,
        //             eqnull: true,
        //             browser: true,
        //             globals: {
        //                 require: true,
        //                 define: true,
        //                 requirejs: true,
        //                 describe: true,
        //                 expect: true,
        //                 it: true
        //             }
        //         }
        // },

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['./public/javascripts/*.js', './public/javascripts/global.js'],
                tasks: ['default'],
                options: {
                    spawn: false,
                },
            }
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.task.run('notify_hooks');
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['concat', 'uglify', 'browserify', 'notify:browserify', 'watch']);
    // grunt.registerTask('default', ['concat', 'uglify', 'watch', 'browserify', 'notify']);

};