/* """""""""""""""""""" Chapter1 is all about servers """""""""""""""""""" */

const http = require("http"); // this is the core module

var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.write("hello Node Js");
  res.end();
});

server.listen(3000, error => {
  if (error) {
    return console.log("Error occured : ", error);
  }
  console.log("server is listening on 3000");
});