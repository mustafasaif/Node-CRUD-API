const user = require("../../../model/newUser");
const logger = require("../../../utils/logger");

module.exports = createUser = async (req) => {
  const { Name, Age, Email } = req;
  try {
    const newUser = user({
      Name,
      Age,
      Email,
    });
    const savedNewUser = await newUser.save();
    return { data: savedNewUser };
  } catch (err) {
    logger.error(err);
    return { error: err.message };
  }
};
