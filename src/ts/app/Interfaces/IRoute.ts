//File: IRoute.ts
/// <reference path="./IController" />

import IController = require('./IController');

interface IRoute {
    path:string;
    controller:IController;
}

export = IRoute;
