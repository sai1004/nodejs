// way One / way two

// const helpers = require("./01-helpers");

// way three
/* ''''''' Object Destructing '''''''''' */

const { sum, multiply } = require("./01-helpers");

// way One / way two
// const total = helpers.sum(10, 50);
// console.log("Total Is:", total);

// way three
const total = sum(10, 120);
console.log("Total Is:", total);

const result = multiply(2, 5);
console.log(result);
