// File: HomeController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="../Views/HomeView" />
/// <reference path="../Models/User" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IController = require('../Interfaces/IController');

class HomeController implements IController {

    constructor(){}

    renderViews(){
        require(['../Views/HomeView','../Models/User'], (HomeView ,User) => {
            var model = new User('Mr', 'Awesome');
            var hView = new HomeView('#main-region', model);
            hView.render();
        });
    }

    load(){
        this.renderViews();
    }
}
export = HomeController;