import userSchema from "../../../model/newUser.js";
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
    return { data: savedNewUser };
  } catch (err) {
    logger.error(err);
    return { error: err.message };
  }
};

export default createUser;
