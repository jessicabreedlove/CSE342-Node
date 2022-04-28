const express = require("express");
const app = express();
const port = 8080;

const ourdata = { professionalName: "Jessica" };

app.get("/professional", (req, res) => {
  res.send(ourdata);
});

app.listen(port, () => {
  console.log("Hello World!");
});
