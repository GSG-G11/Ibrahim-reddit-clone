const { customizedError } = require('./customizedError');
const { getTokenFromCookies } = require('./getTokenFromCookies');
const { signToken, verifyToken } = require('./jwt');
const { verfiyUser } = require('./verfiyUser');

module.exports = {
  signToken,
  verifyToken,
  customizedError,
  getTokenFromCookies,
  verfiyUser,
};
