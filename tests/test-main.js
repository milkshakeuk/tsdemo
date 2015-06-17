window.__karma__.loaded = function () {};

System.config({
  "baseURL": "/base",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "paths": {
    "github:*": "httpdocs/jspm/github/*",
    "npm:*": "httpdocs/jspm/npm/*"
  }
});

System.config({
    "packages": {
        "httpdocs/js": {
            "defaultExtension": "ts"
        },
        "tests": {
            "defaultExtension": "ts"
        }
    },
    "map": {
        "handlebars": "github:components/handlebars.js@3.0.3",
        "jquery": "github:components/jquery@2.1.4",
        "text": "github:systemjs/plugin-text@0.0.2",
        "typescript": "github:mhegazy/typescript@v1.5-beta2",
        "underscore": "npm:underscore@1.8.3"
    }
});

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.ts$/i;

var pathToModule = function (path) {
    return path.replace(/\.ts$/, '');
};


Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        allTestFiles.push(pathToModule(file));
    }
});

var testModules = allTestFiles.map(function(spec) { return System.import(spec) });

Promise.all(testModules).then(function() {
    window.__karma__.start();
});