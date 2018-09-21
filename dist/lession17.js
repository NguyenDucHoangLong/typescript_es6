"use strict";
// person();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("Person is running...");
    };
    return Person;
}());
// function person()
// {
// }
var p1 = new Person();
console.log(typeof Person);
console.log(p1.run());
//# sourceMappingURL=lession17.js.map