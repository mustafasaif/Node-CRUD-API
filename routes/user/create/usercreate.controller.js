const createuser = require("./usercreate.service");

exports.newUser = async (req, res, next) => {
  const data = await createuser(req);
  if (data) {
    res.send(data);
  }
};
