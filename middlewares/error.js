import { ApiError } from "../utils/ApiError.js";
import httpStatus from "http-status";
// import { logger } from "../utils/logger.js";

const errorConverter = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  const response = {
    code: statusCode,
    message,
    stack: err.stack,
  };
  // logger.error(err);

  res.status(statusCode).send(response);
};

export { errorConverter, errorHandler };
