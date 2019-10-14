const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("demo.json", (err, data) => {
      if (err) throw err;
      console.log(data);
      res.writeHead(200, { "Content-Type": "text/json" });
      res.write(data);
      res.end();
    });
  })
  .listen(3000, (err) => {
      if (err) {
          console.log('error while runing server')
      } else{
          console.log('server is listing on 3000')
      }

  });
