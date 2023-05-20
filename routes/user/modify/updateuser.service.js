import userSchema from "../../../model/newUser.js";
import { logger } from "../../../utils/logger.js";
import { createApiError } from "../../../utils/ApiError.js";

const updateUser = async (id, updatedFields) => {
  try {
    const updatedUser = await userSchema.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true }
    );
    if (!updatedUser) {
      throw createApiError(404, "User not found");
    }
    logger.info("user updated successfully");
    return updatedUser;
  } catch (error) {
    logger.error(error);
    throw error
  }
};

export default updateUser;
