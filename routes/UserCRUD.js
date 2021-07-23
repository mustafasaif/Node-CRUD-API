//IMPORT LIBRARIES
const express = require('express')
const User = require('../model/newUser')
const Joi = require('joi')
const router = express.Router()

//FETCHING ALL THE USERS
router.get('/user_info', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)

    } catch (err) {
        res.json({ message: err })
    }
})

//CREATING NEW USER
router.post('/', async (req, res) => {
    const schema = Joi.object().keys({
        name: Joi.string().required().min(3),
        age: Joi.number().required().min(1).max(3)
    });
    Joi.valid(req.body, schema, (err, result) => {
        if (err) {
            res.send("an error has occured")
            console.log(err)
        }

    })
    const newUser = User({
        Name: req.body.Name,
        Age: req.body.Age
    });
    try {
        const savedNewUser = await newUser.save();
        res.json(savedNewUser);

    } catch (err) {
        res.json({ message: err })
    }
})

//GETTING SPECIFIC USER
router.get('/:userId', async (req, res) => {
    try {
        const specificUser = await User.findById(req.params.userId)
        res.json(specificUser)
    } catch (err) {
        res.json({ message: err })
    }

})

//DELETING SPECIFIC USER
router.delete('/:userId', async (req, res) => {
    try {
        const deletedUser = await User.remove({ _id: req.params.userId })
        res.json(deletedUser)

    } catch (err) { res.json({ message: err }) }
})

//UPDATING SPECIFIC USER INFORMATION
router.patch('/:userId', async (req, res) => {
    const schema = Joi.object().keys({

        Name: Joi.string().required().min(3),
        Age: Joi.number().required()
    });

    Joi.valid(req.body, schema, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
    try {
        const updatedUserInfo = await User.updateOne({ _id: req.params.userId }, { $set: { Name: req.body.Name,  Age: req.body.Age } })
        res.json(updatedUserInfo)

    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;
