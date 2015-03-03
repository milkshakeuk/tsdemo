module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.initConfig({
        typescript: {
            base: {
                src: ['!src/ts/**/Interfaces/**.ts','src/ts/**/*.ts'],
                dest: 'httpdocs/js/',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    basePath: 'src/ts/',
                    sourceMap: false,
                    removeComments: true,
                    declaration: false
                }
            },
            tests: {
                src: ['tests/**/*Spec.ts', 'src/ts/**/*.ts'],
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    sourceMap: false,
                    removeComments: true,
                    declaration: false
                }
            }
        },
        watch:{
            tsSource:{
                files: 'src/ts/**/*.ts',
                tasks: ['typescript:base','clean:build']
            },
            testSource:{
                files: 'tests/**/*Spec.ts',
                tasks: ['typescript:tests', 'karma', 'clean:test']
            }
        },
        clean:{
            test: ['src/ts/**/*.js', 'tests/**/*Spec.js'],
            build: ['httpdocs/js/app/Interfaces']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });
    grunt.registerTask('default',['typescript:base','clean:build','watch:tsSource','manualTest']);
    grunt.registerTask('autoTest',['typescript:tests','watch:testSource']);
    grunt.registerTask('manualTest',['typescript:tests','karma','clean:test']);
}