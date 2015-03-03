requirejs.config({
    baseUrl: 'js',
    paths: {
        json2: 'libs/json2',
        underscore: '../../bower_components/underscore/underscore',
        moment: '../../bower_components/momentjs/moment',
        jquery: '../../bower_components/jquery/dist/jquery',
        bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap",
        hogan: '../../bower_components/requirejs-hogan-plugin/hogan',
        text: '../../bower_components/requirejs-hogan-plugin/text',
        hgn: '../../bower_components/requirejs-hogan-plugin/hgn'
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
        },
        moment: {
            noGlobal: true
        }
    }
});
require(['app/app'], function (App) {
    var MyApp = new App();
    MyApp.start();
});
