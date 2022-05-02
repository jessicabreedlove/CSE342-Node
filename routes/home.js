const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("This is my HOME");
});

module.exports = routes;
