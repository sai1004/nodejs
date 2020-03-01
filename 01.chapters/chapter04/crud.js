var express = require("express");
var fs = require("fs");
var app = express();

var port = 3000;

app.get("/", (req, res) => {
  res.send(" hello world");
});

var message = [
  {
    id: 1,
    name: "sai",
    msg: "hi this is sen"
  },
  {
    id: 2,
    name: "sai",
    msg: "hi this is sen"
  }
];

app.get("/messages", (req, res) => {
  var data = JSON.stringify(message);
  var parsedd = JSON.parse(data);
  res.send(parsedd);
  // res.send('kjfdjh')
});

app.post("/messages", (req, res) => {
  res.send(message);
  // res.send('kjfdjh')
});

app.delete("/messages", (req, res) => {
  res.send(message);
  // res.send('kjfdjh')
});

app.put("/messages", (req, res) => {
  res.send(message);
  // res.send('kjfdjh')
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`server is listening on ${port}`);
});
