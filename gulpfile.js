var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');


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
    return gulp.src(['!src/ts/**/Interfaces/**.ts','src/ts/**/*.ts','src/ts/**/*.html'])
               .pipe(gulp.dest('httpdocs/js/'));
});

// run karma test suite
gulp.task('test', function(cb) {
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
    gulp.watch('src/ts/**/*.ts', ['build']);
});

gulp.task('watch:test', function() {
    gulp.watch(['src/ts/**/*.ts','tests/**/*Spec.ts'], ['test']);
});

gulp.task('test:auto', function(cb) {
    gulpSequence('test', 'watch:test', cb);
});

// default task
gulp.task('default', function(cb) {
    gulpSequence('build', 'serve', cb);
});
