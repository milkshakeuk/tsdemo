//File: HomeView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <amd-dependency path="../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/home" />

import IView = require('../Interfaces/IView');
import BaseView = require('./BaseView');

class HomeView extends BaseView implements IView {
    setCompiler():void {
        this.compiler = require('../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/home');
    }
}
export = HomeView;