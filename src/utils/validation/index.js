const { commentIdValidation } = require('./commentIdValidation');
const { editCommentValidation } = require('./editCommentValidation');
const { editPostValidation } = require('./editPostValidation');
const { loginValidation } = require('./loginValidation');
const { newCommentValidation } = require('./newCommentValidation');
const { newPostValidation } = require('./newPostValidation');
const { postIdValidation } = require('./postIdValidation');
const { signupValidation } = require('./signupValidation');

module.exports = {
  signupValidation,
  loginValidation,
  newPostValidation,
  editPostValidation,
  postIdValidation,
  editCommentValidation,
  newCommentValidation,
  commentIdValidation,
};
