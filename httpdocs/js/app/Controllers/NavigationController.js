define(["require", "exports", '../Views/NavigationView'], function (require, exports, NavigationView) {
    var NavigationController = (function () {
        function NavigationController() {
            this.renderViews();
        }
        NavigationController.prototype.renderViews = function () {
            var model = { navs: [
                { name: 'Home', path: '#', chosen: true },
                { name: 'About', path: '#/about' }
            ] };
            var view = new NavigationView('#nav-region', model);
            view.render();
        };
        return NavigationController;
    })();
    return NavigationController;
});
