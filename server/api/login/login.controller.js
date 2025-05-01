"use strict";

const loginrequest = {};

loginrequest.getLogin = async (req, res) => {
  const username = req.body.username

  if (username === process.env.USER_NAME) {
    return res.status(200).json({
      message: "Successfully login",
    });
  } else {
    return res.status(400).json({
      message: "Invalid username",
    });
  }

};


module.exports = loginrequest;
