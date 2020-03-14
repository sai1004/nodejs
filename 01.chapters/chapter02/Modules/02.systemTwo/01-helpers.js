console.log(process); // Shows The Process Info

/* ''''''''''' exporting ''''''''''' */

// way One

// function sum(a, b) {
//   return a + b;
// }

// module.exports = {
//   sum
// };

// way two / three

exports.sum = function(a, b) {
  return a + b;
};

exports.multiply = function(a, b) {
  return a * b;
};
