define(["require", "exports"], function (require, exports) {
    var BaseController = (function () {
        function BaseController(urlVars) {
            this.urlVariables = urlVars;
            this.renderViews();
        }
        BaseController.prototype.renderViews = function () {
        };
        return BaseController;
    })();
    return BaseController;
});
