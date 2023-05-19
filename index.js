import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { errorConverter, errorHandler } from "./middlewares/error.js";
import { logger } from "./utils/logger.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// IMPORT ROUTES
import routes from "./routes/index.js";

app.use("/v1", routes());

app.use(errorConverter);
app.use(errorHandler);

// CONNECTION TO MONGODB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose
  .connect(process.env.DB_CONNECTION_STRING, options)
  .then(() => {
    logger.info("Successfully connected to MongoDB");
  })
  .catch((err) => {
    logger.error(err);
  });

app.listen(process.env.PORT, () => {
  logger.info(`Listening on port ${process.env.PORT}`);
});
