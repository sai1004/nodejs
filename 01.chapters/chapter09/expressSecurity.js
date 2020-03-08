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
