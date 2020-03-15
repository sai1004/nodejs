const math = require("./math");
const geometry = require("./geometry");

console.log(math.add(5, 5));

console.log(math.subtract(4, 2));

console.log(math.multiply(2, 5));

console.log(math.sqaure(4));

console.log(geometry.areaOfCircle(4));

console.log(geometry.volRectangularPrism(20, 10, 5));

console.log(geometry.volOfCylinder(5, 10));

var list = [12, 5, 8, 1, 4, 5, 8, 9, 77, 89, 15, 55, 2];

console.log(math.getMaxNumber(list));
