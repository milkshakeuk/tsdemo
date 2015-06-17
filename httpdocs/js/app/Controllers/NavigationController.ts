// File: NavigationController.ts
/// <reference path="./BaseController" />
/// <reference path="../Views/NavigationView" />
/// <reference path="../../../../typings/tsd.d.ts" />

import BaseController from './BaseController';
//import NavigationView from '../Views/NavigationView';

export default class NavigationController extends BaseController {

    renderViews(){
        System.import('/js/app/Views/NavigationView').then((View) => {
            var model = { navs:[
                { name: 'Home', path:'#', chosen: true },
                { name: 'About', path:'#/about' },
                { name: 'Variable', path: '#/variables/yeehaaa/more/123456' }
            ]};
            var view = new View.default('#nav-region', model);
            view.render();
        });
    }

}
