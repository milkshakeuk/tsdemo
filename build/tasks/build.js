var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var resources = require('../export');

// compile typescript
gulp.task('build-app', function() {

  var ts = require('gulp-typescript');
  var sourcemaps = require('gulp-sourcemaps');
  var tsSettings = { typescript: require('typescript') };
  var tsProject = ts.createProject('./tsconfig.json', tsSettings);

  return gulp.src(paths.dtsSrc.concat(paths.source))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(ts(tsProject, undefined, ts.reporter.longReporter())).js
    .pipe(sourcemaps.write({ includeContent: true }))
    .pipe(gulp.dest(paths.output));

});

// copy libs
gulp.task('copy-libs', function() {

  return gulp.src(resources.list, {base: "."})
    .pipe(gulp.dest(paths.output));

});

// precompile handlebar templates and make them modules which can be imported
gulp.task('build-templates', function() {

  var defineModule = require('gulp-define-module');
  var handlebars = require('gulp-handlebars');
  var hbSettngs = { handlebars: require('handlebars') };

  return gulp.src(paths.hbs)
    .pipe(handlebars(hbSettngs))
    .pipe(defineModule('amd'))
    .pipe(gulp.dest(paths.output));

});

gulp.task('build', function(cb) {

  return runSequence(
    'clean',
    'build-templates',
    'build-app',
    'copy-libs',
    cb
  );

});