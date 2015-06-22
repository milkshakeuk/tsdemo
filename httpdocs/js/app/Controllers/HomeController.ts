// File: HomeController.ts
/// <reference path="./BaseController" />
/// <reference path="../Views/HomeView" />
/// <reference path="../Models/User" />
/// <reference path="../../../../typings/tsd.d.ts" />

import { BaseController, registerRoute } from '../Controllers/BaseController';
import HomeView from '../Views/HomeView';
import User from '../Models/User';

export default class HomeController extends BaseController{

    @registerRoute('test')
    renderViews() {
        var model = new User('Mr', 'Awesome');
        var view = new HomeView('#main-region', model);
        view.render();
    }
    
    @registerRoute('second')
    testMethod(): void{
    }
}
