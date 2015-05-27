// File: app.ts
/// <reference path="app/app.ts"/>
requirejs.config({
    baseUrl: 'js',
    paths: {
        json2: 'libs/json2',
        underscore: 'libs/underscore',
        jquery: 'libs/jquery',
        bootstrap: 'libs/bootstrap',
        hogan: 'libs/hogan',
        text: 'libs/text',
        hgn: 'libs/hgn'
    },
    hgn: {
        templateExtension: '.html'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        bootstrap: {
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        }
    }
});
require(['app/app'], function (App) {
    var MyApp = new App();
    MyApp.start();
});
