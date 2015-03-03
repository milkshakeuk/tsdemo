var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './BaseView', 'jquery', "../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/nav"], function (require, exports, BaseView, $) {
    var NavigationView = (function (_super) {
        __extends(NavigationView, _super);
        function NavigationView() {
            _super.apply(this, arguments);
        }
        NavigationView.prototype.setCompiler = function () {
            this.compiler = require('../../../../bower_components/requirejs-hogan-plugin/hgn!app/templates/nav');
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
