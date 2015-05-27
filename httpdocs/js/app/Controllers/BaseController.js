// File: BaseController.ts
/// <reference path="../Interfaces/IController" />
/// <reference path="../Services/Router/UrlVariable" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>
define(["require", "exports"], function (require, exports) {
    var BaseController = (function () {
        function BaseController(urlVars) {
            this.urlVariables = urlVars;
            this.renderViews();
        }
        BaseController.prototype.renderViews = function () { };
        return BaseController;
    })();
    return BaseController;
});
