define(["require", "exports", './UrlVariable', 'underscore'], function (require, exports, UrlVariable, _) {
    var Route = (function () {
        function Route(path, controller, urlVariables) {
            if (urlVariables === void 0) { urlVariables = []; }
            this.path = path;
            this.controller = controller;
            this.urlVariables = urlVariables;
            this.varTypePattern = /(\{([a-zA-Z0-9]+):([a-zA-Z]+)\})/g;
            this._pathToPatterns();
            this._parseVariableTypes();
        }
        Route.prototype.isMatch = function (path) {
            return this.urlPattern.test(path);
        };
        Route.prototype.parseVariableValues = function (url) {
            var _this = this;
            if (!this.hasVariables)
                return;
            var match;
            while ((match = this.varValPattern.exec(url)) != null) {
                _.each(this.urlVariables, function (item, i) {
                    var variable = _this.urlVariables[i];
                    if (variable.type === 'string') {
                        variable.value = match[i + 1].toString();
                        return;
                    }
                    if (variable.type === 'number') {
                        variable.value = Number(match[i + 1]);
                        return;
                    }
                    throw new TypeError("Unexpected Type: Only primitive types String and Number allowed.");
                });
            }
        };
        Route.prototype._pathToPatterns = function () {
            var urlMatch = this.path.replace(/\{[a-zA-Z0-9]+:[a-zA-Z]+\}/ig, '[a-zA-Z0-9]+').replace('\/', '\\/');
            var valExtract = this.path.replace(/\{[a-zA-Z0-9]+:[a-zA-Z]+\}/ig, '([a-zA-Z0-9]+)').replace('\/', '\\/');
            this.urlPattern = new RegExp("^" + urlMatch + "$");
            this.varValPattern = new RegExp(valExtract, 'g');
        };
        Route.prototype._parseVariableTypes = function () {
            if (this.path.indexOf('{') === -1)
                return;
            var match;
            while ((match = this.varTypePattern.exec(this.path)) != null) {
                this.urlVariables.push(new UrlVariable(match[2], match[3]));
            }
        };
        Object.defineProperty(Route.prototype, "hasVariables", {
            get: function () {
                return this.urlVariables.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        return Route;
    })();
    return Route;
});
