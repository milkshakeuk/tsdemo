define(["require", "exports", './Services/Router', './Controllers/HomeController', './Views/NavigationView', './Controllers/AboutController'], function (require, exports, Router, HomeController, NavigationView, AboutController) {
    var App = (function () {
        function App() {
            var _this = this;
            this.start = function () {
                var navCollection = { navs: [
                    { name: 'Home', path: '#', chosen: true },
                    { name: 'About', path: '#/about' }
                ] };
                var navView = new NavigationView('#nav-region', navCollection);
                navView.render();
                _this.router.route();
            };
            this.router = new Router();
            this.router.addRoute({ path: '/', controller: new HomeController() });
            this.router.addRoute({ path: '/about', controller: new AboutController() });
        }
        return App;
    })();
    return App;
});
