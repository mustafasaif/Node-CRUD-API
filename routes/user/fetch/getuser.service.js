const user = require("../../../model/newUser");
const logger = require("../../../utils/logger");

module.exports = getAllUsers = async (req) => {
  try {
    const users = await user.find();
    return { data: users };
  } catch (err) {
    logger.error(err);
    return { error: err.message };
  }
};
