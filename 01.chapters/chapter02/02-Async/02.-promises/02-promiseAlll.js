const fs = require("fs");
const util = require("util");

const readTheFile = util.promisify(fs.readFile);

const files = ["/sample.txt", "/sample1.txt", "/sample2.txt"];

const promises = files.map(file =>
  readTheFile(`${__dirname}/../${file}`, "utf8")
);

Promise.all(promises)
  .then(data => {
    data.forEach(text => console.log(text));
  })
  .catch(error => console.log("err: ", error));
