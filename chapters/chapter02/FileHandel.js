const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

var port = 3000;

app.get("/", (req, res) => {
  // reading file sending as response...
  fs.readFile("demo.json", "UTF-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
    res.end();
  });
});

app.get("/write", (req, res) => {
  // writing file and sending as response...
  let contentAsyncly =
    "This is the content that going to be saved in demoWrite.txt";
  // first param contains the path/file second param variable consists of data third param error
  fs.writeFile("demoWrite.txt", contentAsyncly, err => {
    if (err) throw err;
    console.log(contentAsyncly);
    res.send(contentAsyncly);
    res.end();
  });

  // var content = "We are writing this file synchronously using node.js";

  // fs.writeFileSync("content.txt", content);
  // console.log("File Written Successfully");
});

app.get("/append", (req, res) => {
  let updateData =
    " \n This data will be appended at the end of the content.txt file.";

  fs.appendFile("content.txt", updateData, err => {
    if (err) throw err;
    console.log("The new_content was appended successfully");
    res.send(updateData);
    res.end();
  });

  //file append operation in nodejs

  // var content = "We are Appending this file synchronously using node.js";
  // fs.appendFileSync("input.txt", content);
  // console.log("File Appended Successfully");
});

app.get("/rename", (req, res) => {
  //you have to pass the Relative path of the file from the Current working directory.

  fs.rename("data.txt", "new_data.txt", err => {
    if (err) throw err;
    console.log("File renamed successfully");
  });

  //you have to pass the Relative path of the file from the Current working directory.
  // fs.renameSync("data.txt", "newData.txt");
  // console.log("File renamed successfully");

  // // To check it's Synchronous nature !
  // console.log("This method is Synchronous");
});

app.get("/delete", () => {
  fs.unlink("filename.txt", err => {
    if (err) throw err;
    console.log("File Deleted Successfully ");
  });

  //Deleting the file Synchronously :

  // var filename = "data.txt";
  // fs.unlinkSync(filename);
  // console.log("File Deleted Successfully");
});





app.listen(port, err => {
  if (err) {
    console.log(`error while runing server`);
  } else {
    console.log(`server is listing on ${port}`);
  }
});
