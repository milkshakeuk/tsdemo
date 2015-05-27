//File: AboutView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <amd-dependency path="/js/libs/hgn.js!app/templates/about" name="compiler" />

import IView = require('../Interfaces/IView');
import BaseView = require('./BaseView');

class AboutView extends BaseView implements IView {
    setCompiler(){
        this.compiler = compiler;
    }
}
export = AboutView;