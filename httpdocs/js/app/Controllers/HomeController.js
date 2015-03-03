var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Controllers/BaseController'], function (require, exports, BaseController) {
    var HomeController = (function (_super) {
        __extends(HomeController, _super);
        function HomeController() {
            _super.apply(this, arguments);
        }
        HomeController.prototype.renderViews = function () {
            var model = new User('Mr', 'Awesome');
            var view = new HomeView('#main-region', model);
            view.render();
        };
        return HomeController;
    })(BaseController);
    return HomeController;
});
