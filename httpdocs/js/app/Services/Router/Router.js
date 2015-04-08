define(["require", "exports", 'underscore'], function (require, exports, _) {
    var Router = (function () {
        function Router(basePath) {
            var _this = this;
            this.basePath = basePath;
            this.routes = [];
            window.addEventListener('hashchange', function () {
                _this.route();
            });
        }
        Router.prototype.addRoute = function (route) {
            this.routes.push(route);
        };
        Router.prototype.route = function () {
            var path = location.hash.slice(1) || '/';
            var route = _.find(this.routes, function (route) {
                return route.isMatch(path) === true;
            });
            if (!route) {
                throw new ReferenceError("No route found that matches given path: " + path);
            }
            this.initialiseController(route, path);
        };
        Router.prototype.initialiseController = function (route, url) {
            var _this = this;
            route.parseVariableValues(url);
            require([this.basePath + route.controller], function (Controller) {
                _this.currentController = new Controller(route.urlVariables);
            });
        };
        return Router;
    })();
    return Router;
});
