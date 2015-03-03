//File: NavigationView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>
/// <amd-dependency path="../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/nav" />

import IView = require('../Interfaces/IView');
import BaseView = require('./BaseView');
import $ = require('jquery');

class NavigationView extends BaseView implements IView {
    setCompiler():void {
        this.compiler = require('../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/nav');
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