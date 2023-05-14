const express = require("express");
const bodyParser = require("body-parser");
const routerUser = require("./controller/user.controller");

const app = express();

app.use(bodyParser.json());

app.use("/user", routerUser);

app.use((error, req, res, next) => res.send(error.message));

module.exports = app;
