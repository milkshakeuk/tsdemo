// File: app.ts
/// <reference path="../../../typings/requirejs/require.d.ts"/>
/// <reference path="./Services/Router"/>
/// <reference path="./Views/NavigationView" />
/// <reference path="./Controllers/HomeController"/>
/// <reference path="./Controllers/AboutController"/>


import Router = require('./Services/Router');
import HomeController = require('./Controllers/HomeController');
import NavigationView = require('./Views/NavigationView');
import AboutController = require('./Controllers/AboutController');

class App {

    router:Router;

    constructor(){
        this.router = new Router();
        this.router.addRoute({ path: '/', controller: new HomeController()});
        this.router.addRoute({ path:'/about', controller: new AboutController()});
    }

    start = () => {
        var navCollection = { navs:[
            { name: 'Home', path:'#', chosen: true },
            { name: 'About', path:'#/about' }
        ]};
        var navView = new NavigationView('#nav-region', navCollection);
        navView.render();
        this.router.route();
    }

}
export = App;