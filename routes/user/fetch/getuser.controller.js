const logger = require("../../../utils/logger");
const getAllUsers = require("./getuser.service");

exports.getAllUsers = async (req, res, next) => {
  try {
    const { data, error } = await getAllUsers(req);
    if (data) {
      res.status(200).send({ Data: data });
    }
    if (error) {
      res.send(500).send({ Error: error });
    }
  } catch (error) {
    logger.error(error);
  }
};
