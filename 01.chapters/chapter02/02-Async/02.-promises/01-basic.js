const fs = require("fs");

const readTheFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

// call the async function

readTheFile(`${__dirname}/../sample.txt`)
  .then(data => console.log(data))
  .catch(error => console.log(error.message));

console.log("i will be printed first!");
