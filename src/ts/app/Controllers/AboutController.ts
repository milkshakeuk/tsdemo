// File: AboutController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="../Views/AboutView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IController = require('../Interfaces/IController');

class AboutController implements IController {

    constructor(){
        this.renderViews();
    }

    renderViews(){
        require(['../Views/AboutView'], (View) => {
            var view = new View('#main-region');
            view.render();
        });
    }
}

export = AboutController;