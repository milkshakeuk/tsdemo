// File: app.ts
/// <reference path="../../../typings/requirejs/require.d.ts"/>
/// <reference path="./Services/Router/Router"/>
/// <reference path="./Services/Router/Route"/>
/// <reference path="./Interfaces/IController" />
/// <reference path="Controllers/NavigationController" />


import Router = require('./Services/Router/Router');
import Route = require('./Services/Router/Route');
import IController = require('./Interfaces/IController');
import NavigationController = require('./Controllers/NavigationController');

class App {

    router:Router;
    navigation:IController;

    constructor(){
        this.router = new Router('../../Controllers/');
        this.router.addRoute(new Route('/', 'HomeController'));
        this.router.addRoute(new Route('/about', 'AboutController'));
        this.router.addRoute(new Route('/variables/{var1:string}/more/{var2:number}', 'VariableController'));
    }

    start = () => {
        this.navigation = new NavigationController();
        this.router.route();
    }

}
export = App;