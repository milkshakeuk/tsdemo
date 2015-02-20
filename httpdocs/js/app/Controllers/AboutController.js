define(["require", "exports"], function (require, exports) {
    var AboutController = (function () {
        function AboutController() {
        }
        AboutController.prototype.load = function () {
            require(['../Views/AboutView'], function (AboutView) {
                var view = new AboutView('#main-region');
                view.render();
            });
        };
        return AboutController;
    })();
    return AboutController;
});
