define(["require", "exports", 'jquery'], function (require, exports, $) {
    var ControllerProvider = (function () {
        function ControllerProvider() {
        }
        ControllerProvider.resolve = function (name) {
            var deferred = $.Deferred();
            require(['../Controllers/' + name], function (Controller) {
                deferred.resolve(new Controller());
            });
            return deferred.promise();
        };
        return ControllerProvider;
    })();
    return ControllerProvider;
});
