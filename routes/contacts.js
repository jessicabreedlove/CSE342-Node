const routes = require("express").Router();
const { ObjectId } = require("mongodb");
const connect = require("../db/connect");
const ObjectID = require("mongodb").ObjectId;

routes.get("/", (req, res) => {
  const results = connect.getCollection().find();

  results.toArray().then((documents) => {
    res.status(200).json(documents);
    console.log("Returned ALL Contacts");
  });
});

routes.get("/:id", (req, res) => {
  contactId = new ObjectId(req.params.id);
  const results = connect.getCollection().find({ _id: contactId });

  results.toArray().then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Returned Contact ${req.params.id}`);
  });
});

module.exports = routes;
