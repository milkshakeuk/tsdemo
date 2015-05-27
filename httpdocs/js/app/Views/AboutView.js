//File: AboutView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <amd-dependency path="/js/libs/hgn.js!app/templates/about" name="compiler" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "/js/libs/hgn.js!app/templates/about", './BaseView'], function (require, exports, compiler, BaseView) {
    var AboutView = (function (_super) {
        __extends(AboutView, _super);
        function AboutView() {
            _super.apply(this, arguments);
        }
        AboutView.prototype.setCompiler = function () {
            this.compiler = compiler;
        };
        return AboutView;
    })(BaseView);
    return AboutView;
});
