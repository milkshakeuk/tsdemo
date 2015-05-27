//File: NavigationView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>
/// <amd-dependency path="/js/libs/hgn.js!app/templates/nav" name="compiler" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "/js/libs/hgn.js!app/templates/nav", './BaseView', 'jquery'], function (require, exports, compiler, BaseView, $) {
    var NavigationView = (function (_super) {
        __extends(NavigationView, _super);
        function NavigationView() {
            _super.apply(this, arguments);
        }
        NavigationView.prototype.setCompiler = function () {
            this.compiler = compiler;
        };
        NavigationView.prototype.renderHook = function () {
            var navs = this.$el.find('ul.nav li');
            navs.on('click', function () {
                navs.removeClass('active');
                $(this).addClass('active');
            });
        };
        return NavigationView;
    })(BaseView);
    return NavigationView;
});
