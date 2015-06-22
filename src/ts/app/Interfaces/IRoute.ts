//File: IRoute.ts
/// <reference path="../Services/Router/UrlVariable" />

import UrlVariable from '../Services/Router/UrlVariable';

interface IRoute {
    path:string;
    controller:string;
    urlVariables: Array<UrlVariable>;
    isMatch(path:string):boolean;
    parseVariableValues(url:string):void;
}
export default IRoute;
