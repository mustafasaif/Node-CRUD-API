//IMPORT LIBRARIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errorConverter, errorHandler } = require("./middlewares/error");
const { logger } = require("./utils/logger");
require("dotenv").config();

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//IMPORT ROUTES
const routes = require("./routes");

app.use("/v1/", routes());

app.use(errorConverter);
app.use(errorHandler);
//CONNECTION TO MONGODB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose
  .connect(process.env.DB_CONNECTION_STRING, options)
  .then(() => {
   logger.info("successful connected to mongodb");
  })
  .catch((err) => {
    logger.error(err);
  });

app.listen(process.env.PORT, () => {
  logger.info(`listening on port ${process.env.PORT}`);
});
