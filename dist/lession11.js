"use strict";
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    // for(let index in arguments)
    // {
    console.log(message);
    console.log(colors);
    // }s
};
displayColors('Red');
displayColors("Red", "Green");
displayColors("Red", "Green", "blue");
//# sourceMappingURL=lession11.js.map