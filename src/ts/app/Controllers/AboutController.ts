// File: AboutController.ts
/// <reference path="../interfaces/IController" />
/// <reference path="../Controllers/BaseController" />
/// <reference path="../Views/AboutView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IController = require('../Interfaces/IController');
import BaseController = require('../Controllers/BaseController');
import AboutView = require('../Views/AboutView');

class AboutController extends BaseController implements IController {

    renderViews(){
        var view = new AboutView('#main-region');
        view.render();
    }

}

export = AboutController;