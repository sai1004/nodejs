var express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
var fs = require("fs");
var app = express();

var port = 3000;

app.use(morgan("common")); // For logs

app.use(helmet()); // for security

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.get("/", (req, res) => {
  res.send(" hello world");
});

/* """"""""""""""""""""""" Sample data """"""""""""""""""" */

var message = [
  {
    id: 1,
    name: "sam",
    msg: "hi this is sam"
  },
  {
    id: 2,
    name: "john",
    msg: "hi this is john"
  }
];

/* """"""""""""""""""""""" Sending response to client in json format """"""""""""""""""" */

app.get("/name/:userName", (req, res) => {
  res.status(200);
  res.setHeader("Content-Type", "text/html");
  res.end(` <html>
  
  <body>
  
  <h1> Hello ${req.params.userName} </h1>
 
  </body>
  </html>`);
});

app.get("/messages", (req, res) => {
  var resData = JSON.stringify(message);
  res.send(resData);
});

app.post("/messages", (req, res) => {
  res.send(message);
});

app.delete("/messages", (req, res) => {
  console.log(" Got The Delete Req For Delete message");
  res.send("I Am Deleted");
});

app.put("/messages", (req, res) => {
  res.send(message);
});

app.use((req, res, next) => {
  const error = new Error(`Not Found- ${res.originalUrl}`);
  res.status(404);
  next(error);
});




app.listen(port, err => {
  if (err) throw err;
  console.log(`server is listening on ${port}`);
});
