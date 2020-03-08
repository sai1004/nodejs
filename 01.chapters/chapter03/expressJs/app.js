const express = require("express");

const app = express();

const morgan = require("morgan");

const port = 3000;

const myOwnMiddleWare = (req, res, next) => {
  console.log("MiddleWare Applied! ");
  next(); // if not applied next Then it will be struck here
};

// middleware
// do somthing in The middle
app.use(morgan("common"));
app.use(myOwnMiddleWare);

// way One
// const postRoutes = require("./routes/post"); // getting Routes From Other File

// app.get("/", postRoutes.getPosts);

// way Two
const { getPosts } = require("./routes/post");
app.get("/", getPosts);

app.listen(port, err => {
  if (!err) {
    console.log(`server is listening on http://127.0.0.1:${port}`);
  }
});
