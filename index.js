// const http = require('http');
// const fs = require('fs');
// const os = require('os');

// var express = require('express');

// var app = express();


// const port = 3000;

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Ji Namste"));

app.listen(6000, () => console.log("Server listening on port 6000!"));


// var server = http.createServer( (req,res)=> {
//     res.writeHead(200, { 'Content-type': 'file/html'})

//     res.end()
// });

// server.listen(port, (err) => {
//     if (err)
//         throw err;
//     console.log(`server started lisrening on port: ${port}`)
// })


