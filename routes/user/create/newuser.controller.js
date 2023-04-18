const createUser = require("./newuser.service");
const Joi = require("joi");
const logger = require("../../../utils/logger");

exports.newUser = async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      Name: Joi.string().required().min(3),
      Age: Joi.number().required().min(10).max(99),
      Email: Joi.string().email().required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
    }
    const { error, data } = await createUser(req.body);

    if (data) {
      res.status(200).send({ Data: data });
    }
    if (error) {
      res.status(500).send({ Error: error });
    }
  } catch (error) {
    logger.error(error);
  }
};
