"use strict";
var express = require("express");
var chalk = require("chalk");
const cors = require("cors");
require("dotenv").config();

var app = express();

app.use(cors());
app.use(express.json())

var server = require("http").createServer(app);

require("./routes")(app);


const port = process.env.PORT || 3005
server.listen(port, function () {
  console.log(
    chalk.red("\nExpress server listening on port ") +
    chalk.yellow("%d") +
    chalk.red(", in ") +
    chalk.yellow("%s") +
    chalk.red(" mode.\n"),
    port,
    app.get("env")
  );
});

module.exports = { server };
