const routes = require("express").Router();
const connect = require("../db/connect");

routes.get("/", (req, res) => {
  connect
    .getCollection()
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
      console.log("Contacts query successful");
    });
});

module.exports = routes;
