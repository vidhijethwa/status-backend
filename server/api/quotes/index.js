"use strict";

const express = require("express");
const router = express.Router();
const controller = require("./quote.controller");

router.get("/quote", controller.getQuote);

module.exports = router;
