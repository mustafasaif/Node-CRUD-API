const user = require("../../model/newUser");
// const Joi = require("joi");

module.exports = getAllUsers = async (req, res, next) => {
  console.log(req.body);
  try {
    const users = await user.find();
    console.log(users);
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};
