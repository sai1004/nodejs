/* Module dependencies */

const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const path = require("path");
const http = require("http");
const url = require("url");

const contacts = require("./modules/contacts");

const app = express();

app.use(logger("common"));
app.use(bodyParser.json());

app.get("/contacts", (req, res) => {
  console.log(req.url);
  let getParams = url.parse(req.url, true).query;

  res.setHeader("content-type", "application/json");

  if (Object.keys(getParams).length === 0) {
    res.end(JSON.stringify(contacts.list()));
  } else {
    res.end(
      JSON.stringify(contacts.queryByArg(getParams.arg, getParams.value))
    );
  }
});

/* get contact details by contact number */
app.get("/contacts/:number", (req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(contacts.query(req.params)));
});

http.createServer(app).listen(3000, () => {
  console.log("Express server listening on port http://127.0.0.1:3000");
});
