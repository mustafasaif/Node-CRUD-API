//IMPORT LIBRARIES
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//TEMPLATE FOR STORING NEW USERS IN MONGODB
const user = new Schema({
    Name: {
        type: String, required: true
    },
    Age: {
        type: Number, required: true, min: 2
    }
})

module.exports = mongoose.model("User", user);