const logger = require("../../../utils/logger");
const getAllUsers = require("./getuser.service");

exports.getAllUsers = async (req, res, next) => {
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
