define(["require", "exports", '../Views/AboutView'], function (require, exports, AboutView) {
    var AboutController = (function () {
        function AboutController() {
            this.renderViews();
        }
        AboutController.prototype.renderViews = function () {
            var view = new AboutView('#main-region');
            view.render();
        };
        return AboutController;
    })();
    return AboutController;
});
