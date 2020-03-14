const fs = require("fs"); // core module

const util = require("util"); // core module

const readTheFile = util.promisify(fs.readFile);

readTheFile(`${__dirname}/../sample.txt`, "utf8")
  .then(data => console.log(data))
  .catch(error => console.log("error: ", error));
