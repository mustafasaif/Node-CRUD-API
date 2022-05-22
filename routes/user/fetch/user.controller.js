const  fetchAllUsers  = require("./user.service");

exports.getAllusers = async (req, res, next) => {
  const results = await fetchAllUsers(req);
  if (results) {
    res.send(results);
  }
  console.log(results);
};
