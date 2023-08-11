import userSchema from "../../../model/newUser.js";
import { logger } from "../../../utils/logger.js";

const getAllUsers = async (req) => {
  try {
    const users = await userSchema.find();
    return users;
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

export default getAllUsers;
