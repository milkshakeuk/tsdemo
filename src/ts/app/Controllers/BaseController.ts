// File: BaseController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="../Services/Router/UrlVariable" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IController = require('../Interfaces/IController');
import UrlVariable = require('../Services/Router/UrlVariable');


class BaseController implements IController {

    protected urlVariables:UrlVariable[];

    constructor(urlVars?:UrlVariable[]){
        this.urlVariables = urlVars;
        this.renderViews();
    }

    //abstract
    renderViews():void {}
}

export = BaseController;