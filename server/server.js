const serverless = require("@stormkit/serverless");
var express = require('express');
var app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

module.exports = {
  handler: serverless(app),
};
