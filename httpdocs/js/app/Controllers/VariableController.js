var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Controllers/BaseController'], function (require, exports, BaseController) {
    var VariableController = (function (_super) {
        __extends(VariableController, _super);
        function VariableController() {
            _super.apply(this, arguments);
        }
        VariableController.prototype.renderViews = function () {
            var _this = this;
            require(['../Views/VariableView'], function (View) {
                var view = new View('#main-region', { variables: _this.urlVariables });
                view.render();
            });
        };
        return VariableController;
    })(BaseController);
    return VariableController;
});
