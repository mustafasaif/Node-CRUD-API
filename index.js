//IMPORT LIBRARIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//IMPORT ROUTES
const routes = require("./routes");

app.use("/v1/", routes());


//CONNECTION TO MONGODB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose
  .connect(process.env.DB_CONNECTION_STRING, options)
  .then(() => {
    console.log("successful connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
