const express = require("express");
const user = require("./user");
const router = express.Router();

module.exports = () => {
  router.use("/", user());

  return router;
};
