//File: BaseView.ts
/// <reference path="../Interfaces/IView" />
/// <reference path="../../../../typings/jquery/jquery.d.ts"/>
define(["require", "exports", 'jquery'], function (require, exports, $) {
    var BaseView = (function () {
        function BaseView(target, model) {
            var _this = this;
            this.render = function () {
                var html = _this.compiler(_this.model);
                _this.$el = $(html);
                $(_this.target).html(_this.$el);
                _this.renderHook();
            };
            this.target = target;
            this.model = model;
            this.setCompiler();
        }
        BaseView.prototype.setCompiler = function () { };
        BaseView.prototype.renderHook = function () { };
        return BaseView;
    })();
    return BaseView;
});
