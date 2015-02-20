define(["require", "exports"], function (require, exports) {
    var HomeController = (function () {
        function HomeController() {
        }
        HomeController.prototype.renderViews = function () {
            require(['../Views/HomeView', '../Models/User'], function (HomeView, User) {
                var model = new User('Mr', 'Awesome');
                var hView = new HomeView('#main-region', model);
                hView.render();
            });
        };
        HomeController.prototype.load = function () {
            this.renderViews();
        };
        return HomeController;
    })();
    return HomeController;
});
