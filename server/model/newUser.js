//IMPORT LIBRARIES
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

//TEMPLATE FOR STORING NEW USERS IN MONGODB
const user = new Schema({
    Name: {
        type: String, required: true
    },
    Age: {
        type: Number, required: true, min: 2
    },
    Email: {
        type: String, unique: true, required: true, trim: true, lowercase: true, match: [/\S+@\S+\.\S+/, 'is invalid']
    }
}, { timestamps: true })

user.plugin(uniqueValidator)

module.exports = mongoose.model("USERS", user);