import userSchema from "../../../model/newUser.js";
import { logger } from "../../../utils/logger.js";
// import { ApiError } from "../../../utils/ApiError.js";

const getAllUsers = async (req) => {
  try {
    const users = await userSchema.find();
    return { data: users };
  } catch (err) {
    logger.error(err);
    return { error: err.message };
  }
};

export default getAllUsers;
