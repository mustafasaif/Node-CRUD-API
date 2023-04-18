const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const logger = require("../utils/logger");

const errorConverter = (err, req, res, next) => {
  let error = err;
  console.log(error);

  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  const response = {
    code: statusCode,
    message,
    stack: err.stack,
  };
  logger.error(err);

  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
