const fs = require("fs");
const util = require("util");

const readTheFile = util.promisify(fs.readFile);

async function readFiles() {
  let contentOne = await readTheFile(`${__dirname}/../sample1.txt`);
  let contentTwo = await readTheFile(`${__dirname}/../sample2.txt`);

  return contentOne + "\n - and - \n \n" + contentTwo;
}

readFiles().then(result => console.log(result));
