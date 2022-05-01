const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//week 2

const dotenv = require("dotenv");
dotenv.config();

//ugly code
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
  if (err) throw err;
  var dbo = db.db("cse341-1");
  dbo
    .collection("contacts")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
