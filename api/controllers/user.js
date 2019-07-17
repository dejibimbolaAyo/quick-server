const logger = require("../config/logger");
const User = require("../services/user");
const {HTTP_STATUS} = require("../constants/httpStatus");

let {error, success} = require("../constants/response");
let response = require("../common/responseWriter");

/**
 * Get users
 */
exports.getUsers = async function (req, res) {
  try {
    const users = await User.findAll();

    if (!users) {
      error.message = "No users found";
      return response.writeJson(res, error, HTTP_STATUS.NOT_FOUND.CODE)
    }
    success.data = users;
    return response.writeJson(res, success, HTTP_STATUS.OK.CODE)

  } catch (err) {
    logger.log("error", `Error occured, ${err}`);
    error.message = err.message || err._message;
    return response.writeJson(res, err, HTTP_STATUS.INTERNAL_SERVER_ERROR.CODE)
  }
}

/**
 * Get user details
 */
exports.getUser = async function (req, res) {}

/**
 * Create user
 */
exports.createUser = async function (req, res) {
  const data = req.body

  if (!data) {
    error.message = `Please provide details for new user`;
    logger.log("info", error.message);
    return response.writeJson(res, error, HTTP_STATUS.BAD_REQUEST.CODE)
  }

  try {
      const user = await User.create(data);

      success.data = user;
      return response.writeJson(res, success, HTTP_STATUS.OK.CODE)
  } catch (err) {
    logger.log("error", `Error occured, ${err}`);
    error.message = err.message || err._message;
    return response.writeJson(res, error, HTTP_STATUS.INTERNAL_SERVER_ERROR.CODE)
  }
}

/**
 * Update user details
 */
exports.updateUser = async function (req, res) {}

/**
 * Delete user
 */
exports.deleteUser = async function (req, res) {}