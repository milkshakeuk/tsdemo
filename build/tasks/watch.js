var gulp = require('gulp');
var paths = require('../paths');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// Watch Files For Changes
gulp.task('watch', function() {

  gulp.watch(paths.source, ['build'])
    .on('change', reportChange);

});