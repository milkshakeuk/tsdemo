define(["require", "exports"], function (require, exports) {
    var User = (function () {
        function User(forename, surname) {
            this.forename = forename;
            this.surname = surname;
        }
        Object.defineProperty(User.prototype, "fullName", {
            get: function () {
                return this.forename + ' ' + this.surname;
            },
            enumerable: true,
            configurable: true
        });
        return User;
    })();
    return User;
});
