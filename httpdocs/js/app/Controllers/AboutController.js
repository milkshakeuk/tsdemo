define(["require", "exports"], function (require, exports) {
    var AboutController = (function () {
        function AboutController() {
            this.renderViews();
        }
        AboutController.prototype.renderViews = function () {
            require(['../Views/AboutView'], function (View) {
                var view = new View('#main-region');
                view.render();
            });
        };
        return AboutController;
    })();
    return AboutController;
});
