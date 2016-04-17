var gulp = require('gulp');
var Karma = require('karma').Server;
var configFile = __dirname + '/../../karma.conf.js';

// Run test once and exit
gulp.task('test', function(cb) {

  var options = {
    configFile: configFile,
    singleRun: true
  };

  new Karma(options, cb).start();

});

// Watch for file changes and re-run tests on each change
gulp.task('tdd', function(cb) {

  var options = {
    configFile: configFile,
  };

  new Karma(options, cb).start();

});
