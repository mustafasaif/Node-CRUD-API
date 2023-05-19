import express from "express";
import userRouter from "./user/index.js";

const router = express.Router();

export default () => {
  router.use("/", userRouter());

  return router;
};
