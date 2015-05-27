//File: NavigationView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>
/// <amd-dependency path="/js/libs/hgn.js!app/templates/nav" name="compiler" />

import IView = require('../Interfaces/IView');
import BaseView = require('./BaseView');
import $ = require('jquery');

class NavigationView extends BaseView implements IView {
    setCompiler():void {
        this.compiler = compiler;
    }
    renderHook():void {
        var navs = this.$el.find('ul.nav li');
        navs.on('click', function(){
            navs.removeClass('active');
            $(this).addClass('active');
        });
    }
}
export = NavigationView;