//IMPORT LIBRARIES
const express = require("express");
const User = require("../model/newUser");
const Joi = require("joi");
const router = express.Router();

//FETCHING ALL THE USERS
router.get("/user_info", async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//CREATING NEW USER
router.post("/", async (req, res) => {
  console.log(req.body);
  const schema = Joi.object().keys({
    Name: Joi.string().required().min(3),
    Age: Joi.number().required().min(10).max(99),
    Email: Joi.string().email().required(),
  });
  const result = schema.validate(req.body);
  console.log(result);
  if (result.error) {
    console.log(result.error.details[0].message);
  } else {
    try {
      const newUser = User({
        Name: req.body.Name,
        Age: req.body.Age,
        Email: req.body.Email,
      });
      const savedNewUser = await newUser.save();
      console.log(savedNewUser);
      res.json(savedNewUser);
    } catch (err) {
      res.json({ message: err });
    }
  }
});

//GETTING SPECIFIC USER

router.get("/:userId", async (req, res) => {
  try {
    const DoesUserExist = await User.exists({ _id: req.params.userId });
    if (DoesUserExist === true) {
      const specificUser = await User.findById(req.params.userId);
      res.json(specificUser);
    } else {
      res.json({ message: "USER ID DOES NOT EXSITS" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETING SPECIFIC USER
router.delete("/:userId", async (req, res) => {
  try {
    const DoesUserExist = await User.exists({ _id: req.params.userId });
    if (DoesUserExist === true) {
      const deletedUser = await User.remove({ _id: req.params.userId });
      res.json(deletedUser);
    } else {
      res.json({ message: "USER ID DOES NOT EXSITS" });
      console.log("SER ID DOES NOT EXSITS");
    }
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATING SPECIFIC USER INFORMATION
router.patch("/:userId", async (req, res) => {
  try {
    const DoesUserExist = await User.exists({ _id: req.params.userId });
    if (DoesUserExist === true) {
      const updatedUserInfo = await User.updateOne(
        { _id: req.params.userId },
        {
          $set: {
            Name: req.body.Name,
            Age: req.body.Age,
            Email: req.body.Email,
          },
        },
        { omitUndefined: true }
      );
      res.json(updatedUserInfo);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
