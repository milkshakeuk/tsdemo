var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './BaseController'], function (require, exports, BaseController) {
    var HomeController = (function (_super) {
        __extends(HomeController, _super);
        function HomeController() {
            _super.apply(this, arguments);
        }
        HomeController.prototype.renderViews = function () {
            require(['../Views/HomeView', '../Models/User'], function (View, User) {
                var model = new User('Mr', 'Awesome');
                var view = new View('#main-region', model);
                view.render();
            });
        };
        return HomeController;
    })(BaseController);
    return HomeController;
});
