var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './BaseView', "../../libs/hgn!app/templates/home"], function (require, exports, BaseView) {
    var HomeView = (function (_super) {
        __extends(HomeView, _super);
        function HomeView() {
            _super.apply(this, arguments);
        }
        HomeView.prototype.setCompiler = function () {
            this.compiler = require('../../libs/hgn!app/templates/home');
        };
        return HomeView;
    })(BaseView);
    return HomeView;
});
