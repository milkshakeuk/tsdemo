//File: BaseView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IView = require('../Interfaces/IView');
import $ = require('jquery');

class BaseView implements IView{

    target:string;
    $el:any;
    model:any;
    compiler:any;

    constructor(target:string, model?:any){
        this.target = target;
        this.model = model;
        this.setCompiler();
    }

    render = ():void => {
        var html = this.compiler(this.model);
        this.$el = $(html);
        $(this.target).html(this.$el);
        this.renderHook();
    }

    //abstract
    setCompiler():void {}
    renderHook():void {}
}
export = BaseView;