//File: Router.ts
/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../Interfaces/IController" />
/// <reference path="../../Interfaces/IRoute" />

import "reflect-metadata";
import IController from '../../Interfaces/IController';
import IRoute from '../../Interfaces/IRoute';
import _ from 'underscore';
//import * as System from 'systemjs';

export default class Router {

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
        System.import(this.basePath + route.controller).then((Controller) => {
            this.currentController = new Controller.default(route.urlVariables);
            console.log(Reflect.getMetadata("registeredRoutes", this.currentController));
        });
    }
}
