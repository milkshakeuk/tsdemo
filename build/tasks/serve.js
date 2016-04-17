var gulp = require('gulp');
var webserver = require('gulp-webserver');

// serve website
gulp.task('serve', ['build'], function() {

  var options = {
    port: 8080,
    fallback: 'index.html',
    open: true
  };

  return gulp.src('httpdocs')
    .pipe(webserver(options));

});