//File: VariableView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <amd-dependency path="/js/libs/hgn.js!app/templates/variable" name="compiler" />

import IView = require('../Interfaces/IView');
import BaseView = require('./BaseView');

class VariableView extends BaseView implements IView {
    setCompiler(){
        this.compiler = compiler;
    }
}
export = VariableView;