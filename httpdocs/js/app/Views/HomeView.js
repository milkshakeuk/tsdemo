//File: HomeView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <amd-dependency path="/js/libs/hgn.js!app/templates/home" name="compiler"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "/js/libs/hgn.js!app/templates/home", './BaseView'], function (require, exports, compiler, BaseView) {
    var HomeView = (function (_super) {
        __extends(HomeView, _super);
        function HomeView() {
            _super.apply(this, arguments);
        }
        HomeView.prototype.setCompiler = function () {
            this.compiler = compiler;
        };
        return HomeView;
    })(BaseView);
    return HomeView;
});
