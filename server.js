const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Sarah Birch");
});

module.exports = routes;

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
