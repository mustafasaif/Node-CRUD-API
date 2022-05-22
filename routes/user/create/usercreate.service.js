const user = require("../../../model/newUser");
const Joi = require("joi");

module.exports = createuser = async (req) => {
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
      const newUser = user({
        Name: req.body.Name,
        Age: req.body.Age,
        Email: req.body.Email,
      });
      const savedNewUser = await newUser.save();
      console.log(savedNewUser);
      return savedNewUser
    } catch (err) {
      return({ message: err });
    }
  }
};
