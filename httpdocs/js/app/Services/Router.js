define(["require", "exports", 'underscore'], function (require, exports, _) {
    var Router = (function () {
        function Router() {
            var _this = this;
            this.routes = [];
            window.addEventListener('hashchange', function () {
                _this.route();
            });
        }
        Router.prototype.addRoute = function (route) {
            this.routes.push(route);
        };
        Router.prototype.route = function () {
            var url = location.hash.slice(1) || '/';
            var route = _.findWhere(this.routes, { path: url });
            require(['./ControllerProvider'], function (ControllerProvider) {
                ControllerProvider.resolve(route.controller);
            });
        };
        return Router;
    })();
    return Router;
});
