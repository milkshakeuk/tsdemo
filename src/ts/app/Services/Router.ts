//File: Router.ts
/// <reference path="../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../Interfaces/IController" />
/// <reference path="../Interfaces/IRoute" />

import IController = require('../Interfaces/IController');
import IRoute = require('../Interfaces/IRoute');
import _ = require('underscore');

class Router {
    routes:IRoute[];
    constructor(){
        this.routes = [];
        window.addEventListener('hashchange', () => {this.route();});
    }
    addRoute(route:IRoute){
        this.routes.push(route);
    }
    route() {
        var url:string = location.hash.slice(1) || '/';
        var route = _.findWhere(this.routes, { path: url });
        route.controller.load();
    }
}
export = Router;
