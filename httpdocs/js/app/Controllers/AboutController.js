// File: AboutController.ts
/// <reference path="../interfaces/IController" />
/// <reference path="../Controllers/BaseController" />
/// <reference path="../Views/AboutView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Controllers/BaseController', '../Views/AboutView'], function (require, exports, BaseController, AboutView) {
    var AboutController = (function (_super) {
        __extends(AboutController, _super);
        function AboutController() {
            _super.apply(this, arguments);
        }
        AboutController.prototype.renderViews = function () {
            var view = new AboutView('#main-region');
            view.render();
        };
        return AboutController;
    })(BaseController);
    return AboutController;
});
