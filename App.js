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
const user_CRUD = require("./routes/UserCRUD");

app.use("/create_user", user_CRUD);

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

//CONNECTION TO MONGODB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose
  .connect(process.env.DB_CONNECTION_STRING, options)
  .then(() => {
    console.log("successful connection to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
