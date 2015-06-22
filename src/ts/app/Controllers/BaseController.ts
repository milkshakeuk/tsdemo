// File: BaseController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="../Services/Router/UrlVariable" />
/// <reference path="../../../../typings/tsd.d.ts" />

import "reflect-metadata";
import IController from '../Interfaces/IController';
import UrlVariable from '../Services/Router/UrlVariable';

export class BaseController implements IController {

    protected urlVariables:UrlVariable[];

    constructor(urlVars?:UrlVariable[]){
        this.urlVariables = urlVars;
        this.renderViews();
    }

    //abstract
    renderViews():void {}
}

export function registerRoute(path: string) {
    return function (target: BaseController, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        let registeredRoutes;
        if(Reflect.hasMetadata("registeredRoutes", target)){
            registeredRoutes = Reflect.getMetadata("registeredRoutes", target);
        }else{
            registeredRoutes = [];
            Reflect.defineMetadata("registeredRoutes", registeredRoutes, target);
        }
        registeredRoutes[path] = propertyKey;
        return descriptor;
    }
}

// export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
//     var originalMethod = descriptor.value; // save a reference to the original method
// 
//     descriptor.value = function(...args: any[]) {
//         console.log("The method args are: " + JSON.stringify(args)); // pre
//         var result = originalMethod.apply(this, args);               // run and store the result
//         console.log("The return value is: " + result);               // post
//         return result;                                               // return the result of the original method
//     };
// 
//     return descriptor;
// }