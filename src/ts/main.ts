// File: app.ts
/// <reference path="app/app.ts"/>

requirejs.config({
    baseUrl: 'js',
    paths: {
        json2:'libs/json2',
        underscore: 'libs/underscore',
        moment: 'libs/moment',
        jquery: 'libs/jquery',
        bootstrap : "libs/bootstrap",
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
        bootstrap : {
            deps :['jquery']
        },
        underscore: {
            exports: '_'
        },
        moment: {
            noGlobal:true
        }
    }
});

// initialise the app
require(['app/app'], (App) => {
    var MyApp = new App();
    MyApp.start();
});
