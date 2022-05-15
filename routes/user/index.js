const express = require("express");
const getAllUsers = require("./user.getall");

const userRouter = express.Router();

module.exports = () => {
  userRouter.get("/all", getAllUsers);
  return userRouter;
};
