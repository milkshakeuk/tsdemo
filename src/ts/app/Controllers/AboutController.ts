// File: AboutController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="../Views/AboutView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IController = require('../Interfaces/IController');
import AboutView = require('../Views/AboutView');

class AboutController implements IController {

    constructor(){
        this.renderViews();
    }

    renderViews(){
        var view = new AboutView('#main-region');
        view.render();
    }
}

export = AboutController;