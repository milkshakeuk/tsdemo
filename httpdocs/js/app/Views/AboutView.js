var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './BaseView', "../../libs/hgn!app/templates/about"], function (require, exports, BaseView) {
    var AboutView = (function (_super) {
        __extends(AboutView, _super);
        function AboutView() {
            _super.apply(this, arguments);
        }
        AboutView.prototype.setCompiler = function () {
            this.compiler = require('../../libs/hgn!app/templates/about');
        };
        return AboutView;
    })(BaseView);
    return AboutView;
});
