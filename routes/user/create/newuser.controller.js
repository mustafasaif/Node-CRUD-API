import createUser from "./newuser.service.js";
import Joi from "joi";
import { logger } from "../../../utils/logger.js";

export const createUserController = async (req, res, next) => {
  try {
    const schema = Joi.object({
      Name: Joi.string().required().min(3),
      Age: Joi.number().required().min(10).max(99),
      Email: Joi.string().email().required(),
    });
    const { error: validationError, value: validatedData } = schema.validate(
      req.body
    );

    if (validationError) {
      res.status(400).send(validationError.details[0].message);
      return;
    }

    const data = await createUser(validatedData);
    logger.info(data);

    res.json(data);
  } catch (error) {
    next(error);
  }
};
