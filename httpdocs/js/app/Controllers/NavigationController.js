var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './BaseController'], function (require, exports, BaseController) {
    var NavigationController = (function (_super) {
        __extends(NavigationController, _super);
        function NavigationController() {
            _super.apply(this, arguments);
        }
        NavigationController.prototype.renderViews = function () {
            require(['../Views/NavigationView'], function (View) {
                var model = { navs: [
                    { name: 'Home', path: '#', chosen: true },
                    { name: 'About', path: '#/about' },
                    { name: 'Variable', path: '#/variables/yeehaaa/more/123456' }
                ] };
                var view = new View('#nav-region', model);
                view.render();
            });
        };
        return NavigationController;
    })(BaseController);
    return NavigationController;
});
