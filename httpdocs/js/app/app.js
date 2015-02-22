define(["require", "exports", './Services/Router', './Controllers/NavigationController'], function (require, exports, Router, NavigationController) {
    var App = (function () {
        function App() {
            var _this = this;
            this.start = function () {
                _this.navigation = new NavigationController();
                _this.router.route();
            };
            this.router = new Router();
            this.router.addRoute({ path: '/', controller: 'HomeController' });
            this.router.addRoute({ path: '/about', controller: 'AboutController' });
        }
        return App;
    })();
    return App;
});
