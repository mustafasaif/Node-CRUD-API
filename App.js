//IMPORT LIBRARIES
const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config()

const app = express();
app.use(express.json())

//IMPORT ROUTES
const user_CRUD = require('./routes/UserCRUD')

app.use('/create_user', user_CRUD)

app.get('/', (req, res) => {
    res.send("HOME PAGE TESTING")
})

//CONNECTION TO MONGODB
mongoose.connect(process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (req, res) => {
        console.log("connected to MongoDB")
    })
app.listen(process.env.PORT, () => {
    console.log((`listening on port ${process.env.PORT}`))
})
