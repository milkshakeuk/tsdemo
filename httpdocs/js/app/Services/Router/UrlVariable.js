define(["require", "exports"], function (require, exports) {
    var UrlVariable = (function () {
        function UrlVariable(name, type) {
            this.name = name;
            this.type = type;
        }
        return UrlVariable;
    })();
    return UrlVariable;
});
