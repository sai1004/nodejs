var fs = require("fs");

readJsonFile = () => {
  var file = "./data/contacts.json";
  return fs.readFileSync(file);
};

exports.list = () => {
  return JSON.parse(readJsonFile());
};

exports.query = number => {
  try {
    let data = JSON.parse(readJsonFile());
    let result = data.result;

    console.log(result);
    
    for (let i = 0; i < result.length; i++) {
      var contact = result[i];
      if (contact.primarycontactnumber === number) {
        return contact;
      }
    }
    return contact;
  } catch (err) {
    console.log(err);
  }
};
