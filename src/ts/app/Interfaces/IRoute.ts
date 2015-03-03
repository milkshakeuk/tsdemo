//File: IRoute.ts
/// <reference path="../Services/Router/UrlVariable" />

import UrlVariable = require('../Services/Router/UrlVariable');

interface IRoute {
    path:string;
    controller:string;
    urlVariables: UrlVariable[];
    isMatch(path:string):boolean;
    parseVariableValues(url:string):void;
}
export = IRoute;
