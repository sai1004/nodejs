const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {

  fs.readFile("demo.json", "UTF-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
    res.end();
  });
  

});


app.listen(3000, err => {
  if (err) {
    console.log("error while runing server");
  } else {
    console.log("server is listing on 3000");
  }
});
