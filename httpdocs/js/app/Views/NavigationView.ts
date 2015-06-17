//File: NavigationView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>

import IView from '../Interfaces/IView';
import BaseView from './BaseView';
//import { render as compiler } from '/js/libs/hgn.js!app/templates/nav';
import template from '/js/app/templates/nav.html!text';
import Handlebars from 'handlebars';
import $ from 'jquery';

export default class NavigationView extends BaseView implements IView {
    setTemplate():void {
        this.template = Handlebars.compile(template);
    }
    renderHook():void {
        var navs = this.$el.find('ul.nav li');
        navs.on('click', function(){
            navs.removeClass('active');
            $(this).addClass('active');
        });
    }
}