//File: BaseView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IView from '../Interfaces/IView';
import $ from 'jquery';

export default class BaseView implements IView {

    target:string;
    $el:any;
    model:any;
    template:any;

    constructor(target:string, model?:any){
        this.target = target;
        this.model = model;
        this.setTemplate();
    }

    render = ():void => {
        var html = this.template(this.model);
        this.$el = $(html);
        $(this.target).html(this.$el);
        this.renderHook();
    }

    //abstract
    setTemplate():void {}
    renderHook():void {}
}
