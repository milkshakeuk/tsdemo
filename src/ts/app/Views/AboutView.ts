//File: AboutView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <amd-dependency path="../../libs/hgn!app/templates/about" />

import IView = require('../Interfaces/IView');
import BaseView = require('./BaseView');

class AboutView extends BaseView implements IView {
    setCompiler(){
        this.compiler = require('../../libs/hgn!app/templates/about');
    }
}
export = AboutView;