define(["require", "exports", '../Views/HomeView', '../Models/User'], function (require, exports, HomeView, User) {
    var HomeController = (function () {
        function HomeController() {
            this.renderViews();
        }
        HomeController.prototype.renderViews = function () {
            var model = new User('Mr', 'Awesome');
            var view = new HomeView('#main-region', model);
            view.render();
        };
        return HomeController;
    })();
    return HomeController;
});
