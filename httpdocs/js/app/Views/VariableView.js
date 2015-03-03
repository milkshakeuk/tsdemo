var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './BaseView', "../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/variable"], function (require, exports, BaseView) {
    var VariableView = (function (_super) {
        __extends(VariableView, _super);
        function VariableView() {
            _super.apply(this, arguments);
        }
        VariableView.prototype.setCompiler = function () {
            this.compiler = require('../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/variable');
        };
        return VariableView;
    })(BaseView);
    return VariableView;
});
