import updateUser from "./updateuser.service.js";
import { logger } from "../../../utils/logger.js";

export const updateUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { Name, email, Age } = req.body;

    const updatedUser = await updateUser(id, { Name, email, Age });

    res.json(updatedUser);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
