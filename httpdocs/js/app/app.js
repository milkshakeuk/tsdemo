// File: app.ts
/// <reference path="../../../typings/requirejs/require.d.ts"/>
/// <reference path="./Services/Router/Router"/>
/// <reference path="./Services/Router/Route"/>
/// <reference path="./Interfaces/IController" />
/// <reference path="Controllers/NavigationController" />
define(["require", "exports", './Services/Router/Router', './Services/Router/Route', './Controllers/NavigationController'], function (require, exports, Router, Route, NavigationController) {
    var App = (function () {
        function App() {
            var _this = this;
            this.start = function () {
                _this.navigation = new NavigationController();
                _this.router.route();
            };
            this.router = new Router('../../Controllers/');
            this.router.addRoute(new Route('/', 'HomeController'));
            this.router.addRoute(new Route('/about', 'AboutController'));
            this.router.addRoute(new Route('/variables/{var1:string}/more/{var2:number}', 'VariableController'));
        }
        return App;
    })();
    return App;
});
