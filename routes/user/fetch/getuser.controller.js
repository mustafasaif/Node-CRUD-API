import { logger } from "../../../utils/logger.js";
import getAllUsers from "./getuser.service.js";

export const getAllUsersController = async (req, res, next) => {
  try {
    const data = await getAllUsers(req);

    res.json(data);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
