import userSchema from "../../../model/newUser.js";
import { logger } from "../../../utils/logger.js";
import { createApiError } from "../../../utils/ApiError.js";

const deleteUser = async (id) => {
  try {
    const deletedUser = await userSchema.findByIdAndDelete(id);

    if (!deletedUser) {
      throw createApiError(404, "User not found");
    }
    logger.info("User deleted successfully");
    return deletedUser;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export default deleteUser;
