"use strict";

const { quoteArray } = require("../../common/constant")
const quoteRequests = {};

quoteRequests.getQuote = async (req, res) => {

  const index = Math.floor(Math.random() * quoteArray.length);

  const quote = quoteArray[index]

  return res.status(200).json({
    data: quote,
    message: "Successfully fetching the quote",
  });
};


module.exports = quoteRequests;
