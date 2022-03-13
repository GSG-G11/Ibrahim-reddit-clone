const { editPostValidation } = require('./editPostValidation');
const { loginValidation } = require('./loginValidation');
const { newPostValidation } = require('./newPostValidation');
const { signupValidation } = require('./signupValidation');

module.exports = {
  signupValidation, loginValidation, newPostValidation, editPostValidation,
};
