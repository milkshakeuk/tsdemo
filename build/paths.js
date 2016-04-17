var appRoot = 'src/';
var outputRoot = 'httpdocs/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  hbs: appRoot + '**/*.hbs',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  dtsSrc: [
    './typings/browser/**/*.d.ts',
    './jspm_packages/**/*.d.ts'
  ]
}