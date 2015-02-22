// File: ControllerProvider.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>


import IController = require('../Interfaces/IController');
import $ = require('jquery');

class ControllerProvider {

    static resolve(name:string):JQueryPromise<IController> {
        var deferred = $.Deferred();
        require(['../Controllers/' + name], (Controller) => {
            deferred.resolve(new Controller());
        });
        return deferred.promise();
    }
}

export = ControllerProvider;

