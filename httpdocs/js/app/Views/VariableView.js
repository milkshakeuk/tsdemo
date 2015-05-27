//File: VariableView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="./BaseView" />
/// <amd-dependency path="/js/libs/hgn.js!app/templates/variable" name="compiler" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "/js/libs/hgn.js!app/templates/variable", './BaseView'], function (require, exports, compiler, BaseView) {
    var VariableView = (function (_super) {
        __extends(VariableView, _super);
        function VariableView() {
            _super.apply(this, arguments);
        }
        VariableView.prototype.setCompiler = function () {
            this.compiler = compiler;
        };
        return VariableView;
    })(BaseView);
    return VariableView;
});
