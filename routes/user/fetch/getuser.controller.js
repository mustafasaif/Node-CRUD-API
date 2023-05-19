import { logger } from "../../../utils/logger.js";
import getAllUsers from "./getuser.service.js";

export const getAllUsersController = async (req, res, next) => {
  try {
    const { data, error } = await getAllUsers(req);
    if (data) {
      res.status(200).send(data);
    }
    if (error) {
      res.status(500).send(error);
    }
  } catch (error) {
    logger.error(error);
  }
};
