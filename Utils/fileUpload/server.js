const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

const port = 3000;

app.use("/form", express.static(__dirname + "/index.html"));

app.use(fileUpload());

app.get("/ping", (req, res) => {
  res.send("ping");
});

app.post("/upload", (req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("NO Files were uploaded.");
    return;
  }

  console.log("req.files >>> ", req.files);

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

  sampleFile = req.files.sampleFile;

  uploadPath = __dirname + "/uploads/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server

  //   sampleFile.mv(uploadPath, (err) => {
  //     if (err) {
  //       return res.status(500).send(err);
  //     }
  res.status(200).send(`"File Uploaded To >>>", ${uploadPath}`);
  //   });

  //   sampleFile.mv(path.join(__dirname, 'uploads', sampleFile.name), (err) => {
  //     if (err)
  //         return res.status(500).send(err);
  //     res.send('File uploaded!');
  // });
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("server is listening on ", port);
  }
});
