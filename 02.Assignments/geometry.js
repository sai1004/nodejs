exports.areaOfCircle = raduis => {
  return Math.PI * raduis ** 2;
};

exports.volRectangularPrism = (len, width, height) => {
  let volume = len * width * height;
  return volume;
};

exports.volOfCylinder = (raduis, height) => {
  let volume = Math.PI * raduis ** 2 * height;
  return volume;
};
