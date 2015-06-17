// File: VariableController.ts
/// <reference path="../Controllers/BaseController" />
/// <reference path="../Views/VariableView" />
/// <reference path="../../../../typings/tsd.d.ts" />

import BaseController from '../Controllers/BaseController';
//import * as System from 'systemjs';

export default class VariableController extends BaseController {

    renderViews(){
        System.import('/js/app/Views/VariableView').then((View) => {
            var view = new View.default('#main-region', {variables: this.urlVariables});
            view.render();
        });
    }

}
