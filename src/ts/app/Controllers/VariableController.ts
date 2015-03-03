// File: VariableController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="../Controllers/BaseController" />
/// <reference path="../Views/VariableView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IController = require('../Interfaces/IController');
import BaseController = require('../Controllers/BaseController');

class VariableController extends BaseController implements IController {

    renderViews(){
        require(['../Views/VariableView'], (View) => {
            var view = new View('#main-region', {variables: this.urlVariables});
            view.render();
        });
    }

}

export = VariableController;