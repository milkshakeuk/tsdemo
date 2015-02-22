define(["require", "exports"], function (require, exports) {
    var HomeController = (function () {
        function HomeController() {
            this.renderViews();
        }
        HomeController.prototype.renderViews = function () {
            require(['../Views/HomeView', '../Models/User'], function (View, User) {
                var model = new User('Mr', 'Awesome');
                var view = new View('#main-region', model);
                view.render();
            });
        };
        return HomeController;
    })();
    return HomeController;
});
