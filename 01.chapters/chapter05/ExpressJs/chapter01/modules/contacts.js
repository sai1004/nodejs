var fs = require("fs");

readJsonFile = () => {
  var file = "./data/contacts.json";
  return fs.readFileSync(file);
};

exports.list = () => {
  return JSON.parse(readJsonFile());
};
