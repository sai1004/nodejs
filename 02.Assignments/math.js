function add(a, b) {
  return a + b;
}

function subtract(x, y) {
  return x - y;
}
function multiply(c, d) {
  return c * d;
}

function sqaure(e) {
  return e ** 2;
}

getMaxNumber = arr => {
  let maxNumber = Math.max(...arr);
  return maxNumber;
};

module.exports = {
  add,
  subtract,
  multiply,
  sqaure,
  getMaxNumber
};
