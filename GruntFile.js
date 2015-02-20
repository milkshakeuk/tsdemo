module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
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
            }
        },
        watch:{
            tsSource:{
                files: 'src/ts/**/*.ts',
                tasks: ['typescript:base']
            }
        }
    });
    grunt.registerTask('default',['typescript','watch']);
}