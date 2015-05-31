/// <reference path="typings/node/node.d.ts"/>

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var ts = require('gulp-typescript');
var del = require('del');


var paths = {
    'bower':'bower_components'
};

// serve website
gulp.task('serve', function () {
    var webserver = require('gulp-webserver');

    gulp.src('httpdocs')
        .pipe(webserver({
            port: 8080,
            fallback: 'index.html',
            open: true
        }));
});

// compile typescript
gulp.task('build', function () {
    var settings = { typescript: require('typescript') };
    var tsProject = ts.createProject('./tsconfig.json', settings);
    return gulp.src(['!src/ts/**/Interfaces/**.ts','src/ts/**/*.ts'])
               .pipe(ts(tsProject, undefined, ts.reporter.longReporter()))
               .js.pipe(gulp.dest('httpdocs/js/'));
});

// compile the jasmine tests
gulp.task('build:tests', function () {
    var settings = { typescript: require('typescript') };
    var tsProject = ts.createProject('./tsconfig.json', settings);
    
    var stream = gulp.src('tests/**/*Spec.ts')
                     .pipe(ts(tsProject, undefined, ts.reporter.longReporter()))
                     .js.pipe(gulp.dest('tests/'));
    return stream;
});

// compile in the source directory for test
gulp.task('build:for:tests', function () {
    var settings = { typescript: require('typescript') };
    var tsProject = ts.createProject('./tsconfig.json', settings);

    var stream = gulp.src(['!src/ts/**/Interfaces/**.ts','src/ts/**/*.ts'])
                     .pipe(ts(tsProject, undefined, ts.reporter.longReporter()))
                     .js.pipe(gulp.dest('src/ts/'));
    return stream;
});

// copy client libs to httpdocs
gulp.task('scripts', function() {
    var stream = gulp.src([
                paths.bower + '/json2/json2.js',
                paths.bower + '/underscore/underscore.js',
                paths.bower + '/jquery/dist/jquery.js',
                paths.bower + '/bootstrap/dist/js/bootstrap.js',
                paths.bower + '/requirejs-hogan-plugin/hogan.js',
                paths.bower + '/requirejs-hogan-plugin/text.js',
                paths.bower + '/requirejs-hogan-plugin/hgn.js',
                paths.bower + '/requirejs/require.js'
                ])
                .pipe(gulp.dest('httpdocs/js/libs/'));
    return stream;
});

// clean js files
gulp.task('clean:all', function (cb) {
    var files = ['httpdocs/js/**/*.js', 'src/ts/**/*.js', 'tests/**/*.js', '!tests/test-main.js'];
    del(files, cb);
});

gulp.task('clean:tests', function(cb) {
    var files = ['src/ts/**/*.js', 'tests/**/*.js', '!tests/test-main.js'];
    del(files, cb);
});

// run test suite
gulp.task('run:tests', function(cb) {
    var karma = require('karma').server;
    var options = {
                configFile: __dirname + '/karma.conf.js',
                singleRun: true
              };
    // Be sure to return the stream 
    karma.start(options, cb);
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/ts/**/*.ts', ['compile']);
});

gulp.task('watch:test', function() {
    gulp.watch(['src/ts/**/*.ts','tests/**/*Spec.ts'], ['test']);
});

// default task
gulp.task('default', function(cb) {
    gulpSequence('clean:all', ['scripts', 'build'], 'serve', cb);
});

// run karma test suite
gulp.task('test', function(cb) {
    gulpSequence('clean:all', ['scripts', 'build:for:tests', 'build:tests'], 'run:tests', 'clean:tests', cb);
});

gulp.task('test:auto', function(cb) {
    gulpSequence('test', 'watch:test', cb);
});