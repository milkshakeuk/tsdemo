// File: HomeController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="./BaseController" />
/// <reference path="../Views/HomeView" />
/// <reference path="../Models/User" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IController = require('../Interfaces/IController');
import BaseController = require('./BaseController');

class HomeController extends BaseController implements IController {

    renderViews(){
        require(['../Views/HomeView','../Models/User'], (View ,User) => {
            var model = new User('Mr', 'Awesome');
            var view = new View('#main-region', model);
            view.render();
        });
    }

}

export = HomeController;