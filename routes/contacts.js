const routes = require("express").Router();

routes.get("/", (req, res) => {
  //ugly code

  const dotenv = require("dotenv");
  dotenv.config();

  const MongoClient = require("mongodb").MongoClient;
  MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("cse341-1");
    dbo
      .collection("contacts")
      .find()
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
  });
});

module.exports = routes;

//week 2
