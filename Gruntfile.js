module.exports = function(grunt){
    // Do grunt-related things here
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            build: {
                src: 'src/main.js',
                dest: 'build/<%= pkg.name %>.min.js'
            },
            my_advance_target: {
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    }
                },
                files: {
                    'build/<%= pkg.name %>.beauty.js': ['src/main.js']
                }
            }
        },

        watch: {
            files: ['src/**/*.js'],
            tasks: ['uglify',]
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks
    grunt.registerTask('default', ['uglify', 'watch']);
};
