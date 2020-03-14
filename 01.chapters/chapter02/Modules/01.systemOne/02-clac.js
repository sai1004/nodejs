/* ''''''' Object Destructing '''''''''' */

const { sum, sub, multiply, square } = require("./01-math"); // importing

const total = sum(10, 120);
console.log("Total Is:", total);

console.log("sub:", sub(4, 2));

console.log("multiply: ", multiply(2, 5));

console.log("square:", square(4));
