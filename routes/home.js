const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("This is my Home");
});

module.exports = routes;
