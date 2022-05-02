const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Sarah Birch");
});

routes.use("/contacts", require("./contacts"));

module.exports = routes;
