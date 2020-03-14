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

app.get("/contacts", (request, response) => {
  let getParams = url.parse(request.url, true).query;

  if (Object.keys(getParams).length === 0) {
    response.setHeader("content-type", "application/json");
    response.end(JSON.stringify(contacts.list()));
  } else {
    response.setHeader("content-type", "application/json");
    response.end(
      JSON.stringify(contacts.queryByArg(getParams.arg, getParams.value))
    );
  }
});

http.createServer(app).listen(3000, function() {
  console.log("Express server listening on port 3000");
});
