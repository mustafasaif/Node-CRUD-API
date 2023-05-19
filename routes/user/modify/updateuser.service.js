import userSchema from "../../../model/newUser.js";
import { logger } from "../../../utils/logger.js";

const updateUser = async (id, updatedFields) => {
  try {
    const updatedUser = await userSchema.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true }
    );
    if (!updatedUser) {
      return { error: "User not found" };
    }
    logger.info("user updated successfully");
    return updatedUser;
  } catch (error) {
    logger.error(error);
  }
};

export default updateUser;
