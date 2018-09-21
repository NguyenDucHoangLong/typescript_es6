"use strict";
var Person18 = /** @class */ (function () {
    function Person18(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    Person18.talk = function () {
        console.log("This static method is talk");
    };
    Person18.prototype.run = function () {
        console.log("Person running...");
    };
    return Person18;
}());
var p = new Person18("TEDU");
p.run();
Person18.talk();
//# sourceMappingURL=lession18.js.map