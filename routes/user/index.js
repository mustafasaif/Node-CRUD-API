const express = require("express");
const { getAllUsers } = require("./fetch/getuser.controller");
const { newUser } = require("./create/newuser.controller");
const userRouter = express.Router();

module.exports = () => {
  userRouter.get("/all", getAllUsers);
  userRouter.post("/create", newUser);
  return userRouter;
};
