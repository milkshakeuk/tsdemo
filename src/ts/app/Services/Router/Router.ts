//File: Router.ts
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../Interfaces/IController" />
/// <reference path="../../Interfaces/IRoute" />

import IController = require('../../Interfaces/IController');
import IRoute = require('../../Interfaces/IRoute');
import _ = require('underscore');
import $ = require('jquery');


class Router {

    private routes:Array<IRoute>;
    private currentController:IController;


    constructor(public basePath:string){
        this.routes = [];
        window.addEventListener('hashchange', () => {this.route();});
    }
    addRoute(route:IRoute){
        this.routes.push(route);
    }
    route() {
        var path:string = location.hash.slice(1) || '/';
        var route = _.find(this.routes, (route:IRoute) => {
            return route.isMatch(path) === true;
        });
        if(!route){
            throw new ReferenceError(`No route found that matches given path: ${path}`);
        }
        this.initialiseController(route, path);
    }

    private initialiseController(route:IRoute, url:string):void{
        route.parseVariableValues(url);
        require([this.basePath + route.controller], (Controller) => {
            this.currentController = new Controller(route.urlVariables);
        });
    }

}
export = Router;
