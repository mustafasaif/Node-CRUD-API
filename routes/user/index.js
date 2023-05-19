import express from "express";
import { getAllUsersController } from "./fetch/getuser.controller.js";
import { createUserController } from "./create/newuser.controller.js";
import { updateUserController } from "./modify/updateuser.controller.js";

const userRouter = express.Router();

export default () => {
  userRouter.get("/all", getAllUsersController);
  userRouter.post("/create", createUserController);
  userRouter.patch("/update:id", updateUserController);
  return userRouter;
};
