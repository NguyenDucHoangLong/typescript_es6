let displayColorsSpread = function (message, ...colors: string[]) {
    // for(let index in arguments)
    // {
    // console.log(message);
    // console.log(colors);
    // }s
    console.log(arguments.length);
    for (let i in colors) {
        console.log(colors[i]);
    }
};

let message = "Hello";
let colors = ['Red', 'Green', 'Blue'];

displayColorsSpread(message, ...colors);
// displayColors1(message, "Red", "Green");
// displayColors1(message, "Red", "Green", "blue");