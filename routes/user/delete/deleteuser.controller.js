import deleteUser from "./deleteuser.service.js";
import { logger } from "../../../utils/logger.js";

export const deleteUserController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUser(id);
    res.json(deletedUser);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
