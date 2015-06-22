/* global Promise */
/* global System */
// make it async
window.__karma__.loaded = function () { };

var testSpecs = [];
var TEST_REGEXP = /(spec|test)\.(ts|js)$/i;

var normalise = function (path) {
    return path.replace(/\.(ts|js)$/, '');
};

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        testSpecs.push(normalise(file));
    }
});

var testModules = testSpecs.map(function (spec) { return System.import(spec); });

Promise.all(testModules).then(function () {
    window.__karma__.start();
});