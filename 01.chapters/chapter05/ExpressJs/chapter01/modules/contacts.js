var fs = require("fs");

readJsonFile = () => {
  var file = "./data/contacts.json";
  return fs.readFileSync(file);
};

exports.list = () => {
  return JSON.parse(readJsonFile());
};

exports.query = number => {
  let data = readJsonFile();
  let dataResult = JSON.parse(data);
  let result = dataResult.result;

  for (var i = 0; i < result.length; i++) {
    var contact = result[i];
    if (contact.primarycontactnumber === number) {
      return contact;
    }
  }
  console.log(number);
  return contact;
};
