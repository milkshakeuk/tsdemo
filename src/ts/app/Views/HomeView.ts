//File: HomeView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>
/// <amd-dependency path="../../libs/hgn!app/templates/home" />

import IView = require('../Interfaces/IView');
import BaseView = require('./BaseView');
import $ = require('jquery');

class HomeView extends BaseView implements IView {
    setCompiler():void {
        this.compiler = require('../../libs/hgn!app/templates/home');
    }
}
export = HomeView;