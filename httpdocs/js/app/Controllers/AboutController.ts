// File: AboutController.ts
/// <reference path="../Controllers/BaseController" />
/// <reference path="../Views/AboutView" />
/// <reference path="../../../../typings/tsd.d.ts" />

import { BaseController } from '../Controllers/BaseController';
import AboutView from'../Views/AboutView';

export default class AboutController extends BaseController {

    renderViews(){
        var view = new AboutView('#main-region');
        view.render();
    }

}
