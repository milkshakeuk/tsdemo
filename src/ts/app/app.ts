// File: app.ts
/// <reference path="../../../typings/requirejs/require.d.ts"/>
/// <reference path="./Services/Router"/>
/// <reference path="./Interfaces/IController" />
/// <reference path="./Controllers/NavigationController" />


import Router = require('./Services/Router');
import IController = require('./Interfaces/IController');
import NavigationController = require('./Controllers/NavigationController');

class App {

    router:Router;
    navigation:IController;

    constructor(){
        this.router = new Router();
        this.router.addRoute({ path: '/', controller: 'HomeController'});
        this.router.addRoute({ path:'/about', controller: 'AboutController'});
    }

    start = () => {
        this.navigation = new NavigationController();
        this.router.route();
    }

}
export = App;