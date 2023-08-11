import userSchema from "../../../model/newUser.js";
import { createApiError } from "../../../utils/ApiError.js";
import { logger } from "../../../utils/logger.js";

const createUser = async (req) => {
  const { Name, Age, Email } = req;

  try {
    const newUser = new userSchema({
      Name,
      Age,
      Email,
    });

    const savedNewUser = await newUser.save();
    return savedNewUser;
  } catch (err) {
    logger.error(err);
    if (err.name === "ValidationError") {
      throw createApiError(
        409,
        "This email is already in use. Please try a different one."
      );
    }
    throw err;
  }
};

export default createUser;
