//File: VariableView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <amd-dependency path="../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/variable" />

import IView = require('../Interfaces/IView');
import BaseView = require('./BaseView');

class VariableView extends BaseView implements IView {
    setCompiler(){
        this.compiler = require('../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/variable');
    }
}
export = VariableView;