//File: HomeView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <amd-dependency path="/js/libs/hgn.js!app/templates/home" name="compiler"/>

import IView = require('../Interfaces/IView');
import BaseView = require('./BaseView');

class HomeView extends BaseView implements IView {
    setCompiler():void {
        this.compiler = compiler;
    }
}
export = HomeView;