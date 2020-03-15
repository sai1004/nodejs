const express = require("express");

const app = express();

const morgan = require("morgan");

const port = 3000;

const myOwnMiddleWare = (req, res, next) => {
  console.log("MiddleWare Applied! ");
  next(); // if not applied next() Then it will be struck here try Remove next() and hit req and see
};

/* '''''''''' middleware '''''''''' */
// do somthing in The middle

app.use(morgan("common"));
app.use(myOwnMiddleWare);

/* '''''''''' way One '''''''''' */
// getting Routes From Other File
// const postRoutes = require("./routes/post");
// app.get("/", postRoutes.getPosts);

/* '''''''''' way Two '''''''''' */
const { getPosts } = require("./routes/post");
app.get("/", getPosts);

// if we want to apply auth to any route can use own middleware
// app.get("/", authMiddleWare , getPosts);

app.listen(port, err => {
  if (!err) {
    console.log(`server is listening on http://127.0.0.1:${port}`);
  }
});