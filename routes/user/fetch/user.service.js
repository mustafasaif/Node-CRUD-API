const user = require("../../../model/newUser");
// const Joi = require("joi");

module.exports = fetchAllUsers = async (req, res, next) => {
  console.log(req.body);
  try {
    const users = await user.find();
    console.log(users);
    return users
  } catch (err) {
    return({ message: err });
  }
};