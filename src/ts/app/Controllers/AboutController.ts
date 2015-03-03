// File: AboutController.ts
/// <reference path="../interfaces/IController" />
/// <reference path="../Controllers/BaseController" />
/// <reference path="../Views/AboutView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IController = require('../Interfaces/IController');
import BaseController = require('../Controllers/BaseController');

class AboutController extends BaseController implements IController {

    renderViews(){
        require(['../Views/AboutView'], (View) => {
            var view = new View('#main-region');
            view.render();
        });
    }

}

export = AboutController;