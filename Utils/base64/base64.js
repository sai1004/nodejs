var fs = require("fs");
var svg2img = require("svg2img");
var btoa = require("btoa");

var svgString = [
  '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="236" height="120" ',
  'viewBox="0 0 236 120">',
  '<rect x="14" y="23" width="200" height="50" fill="#55FF55" stroke="black" stroke-width="1" />',
  "</svg>"
].join("");

//1. convert from svg string
svg2img(svgString, function(error, buffer) {
  //returns a Buffer
  fs.writeFileSync("foo1.png", buffer);
});

//2. convert from svg's base64 string
svg2img("data:image/svg+xml;base64," + btoa(svgString), function(
  error,
  buffer
) {
  fs.writeFileSync("foo2.png", buffer);
});

fs.writeFileSync("foo.svg", new Buffer(svgString));

//3. convert from a local file
svg2img(__dirname + "/foo.svg", function(error, buffer) {
  fs.writeFileSync("foo3.png", buffer);
});

//4. convert from a remote file
svg2img(
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Svg_example1.svg",
  function(error, buffer) {
    fs.writeFileSync("foo4.png", buffer);
  }
);

//5. convert to jpeg file
svg2img(svgString, { format: "jpg", quality: 75 }, function(error, buffer) {
  //default jpeg quality is 75
  fs.writeFileSync("foo5.jpg", buffer);
});
