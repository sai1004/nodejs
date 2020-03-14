const fs = require("fs");

let file = `${__dirname}/../sample.txt`;

const callback = (err, data) => {
  if (err) throw err;
  console.log(data);
};

fs.readFile(file, "utf8", callback); // this will execute after the main thread is executed!

console.log("print this last!"); // but it prints first, cuase it is main thread not callback
