var express = require("express");
var cors = require("cors");
var dal = require("./mongo_test.js");
var app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the other side..." });
});

app.get("/account/alldata", (req, res) => {
  dal.all().then((data) => {
    res.send(data);
  });
});

app.get("/account/create/:name/:email/:password", (req, res) => {
  const doc = {
    name: req.params.name,
    email: req.params.email,
    password: req.params.password,
  };
  dal.create(doc.name, doc.email, doc.password).then((user) => {
    console.log(user);
    res.send(user);
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
