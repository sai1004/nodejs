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

  let getParams = url.parse(req.url, true).query;
  
  if (Object.keys(getParams).length === 0) {

    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify(contacts.list()));

  } else {

    res.setHeader("content-type", "application/json");
    res.end(
      JSON.stringify(contacts.queryByArg(getParams.arg, getParams.value))
    );
    
  }

});


http.createServer(app).listen(3000, () => {
  console.log("Express server listening on port 3000");
});
