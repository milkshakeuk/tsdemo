// File: BaseController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="../Services/Router/UrlVariable" />
/// <reference path="../../../../typings/tsd.d.ts" />

import IController from '../Interfaces/IController';
import UrlVariable from '../Services/Router/UrlVariable';

export default class BaseController implements IController {

    protected urlVariables:UrlVariable[];

    constructor(urlVars?:UrlVariable[]){
        this.urlVariables = urlVars;
        this.renderViews();
    }

    //abstract
    renderViews():void {}
}
