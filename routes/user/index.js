const express = require("express");
const { getAllusers } = require("./fetch/user.controller");
const {newUser} = require('./create/usercreate.controller')
const userRouter = express.Router();

module.exports = () => {
  userRouter.get("/all", getAllusers);
  userRouter.post("/create", newUser);
  return userRouter;
};
