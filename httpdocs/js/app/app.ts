// File: app.ts
/// <reference path="../../../typings/requirejs/require.d.ts"/>
/// <reference path="./Services/Router/Router"/>
/// <reference path="./Services/Router/Route"/>
/// <reference path="./Interfaces/IController" />
/// <reference path="Controllers/NavigationController" />


import Router from './Services/Router/Router';
import Route from './Services/Router/Route';
import IController from './Interfaces/IController';
import NavigationController from './Controllers/NavigationController';

export default class App {

    router:Router;
    navigation:IController;

    constructor(){
        this.router = new Router('/js/app/Controllers/');
        this.router.addRoute(new Route('/'));
        this.router.addRoute(new Route('/about'));
        this.router.addRoute(new Route('/variable/{var1:string}/more/{var2:number}'));
    }

    start = () => {
        this.navigation = new NavigationController();
        this.router.route();
    }

}