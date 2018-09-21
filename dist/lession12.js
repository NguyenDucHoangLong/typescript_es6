"use strict";
var displayColorsSpread = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    // for(let index in arguments)
    // {
    // console.log(message);
    // console.log(colors);
    // }s
    console.log(arguments.length);
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var message = "Hello";
var colors = ['Red', 'Green', 'Blue'];
displayColorsSpread.apply(void 0, [message].concat(colors));
// displayColors1(message, "Red", "Green");
// displayColors1(message, "Red", "Green", "blue");
//# sourceMappingURL=lession12.js.map