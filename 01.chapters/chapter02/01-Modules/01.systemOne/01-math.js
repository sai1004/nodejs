console.log(process); // Shows The Process Info

/* ''''''''''' exporting ''''''''''' */

exports.sum = function(a, b) {
  return a + b;
};

exports.sub = function(c, d) {
  return c - d;
};

exports.multiply = function(e, f) {
  return e * f;
};

exports.square = function(g) {
  return g ** 2;
};
