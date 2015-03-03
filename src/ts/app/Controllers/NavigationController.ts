// File: NavigationController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="./BaseController" />
/// <reference path="../Views/NavigationView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IController = require('../Interfaces/IController');
import BaseController = require('./BaseController');


class NavigationController extends BaseController implements IController {

    renderViews(){
        require(['../Views/NavigationView'], (View) => {
            var model = { navs:[
                { name: 'Home', path:'#', chosen: true },
                { name: 'About', path:'#/about' },
                { name: 'Variable', path: '#/variables/yeehaaa/more/123456' }
            ]};
            var view = new View('#nav-region', model);
            view.render();
        });
    }

}
export = NavigationController;