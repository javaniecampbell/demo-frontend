module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        copy: {
            primary: {
                expand: true,
                cwd: 'packages/web/build/',
                src: '**',
                dest: 'packages/server/public/'
            },
            secondary: {
                expand: true,
                cwd: 'packages/server/',
                src: '**',
                dest: 'build/'
            }
        }
    });

    // Load the plugin that provides the "grunt-copy" task.
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy:primary', 'copy:secondary']);

};