const { addPost } = require('./addPost');
const { editPost } = require('./editPost');
const { login } = require('./login');
const { logout } = require('./logout');
const { signup } = require('./signup');

module.exports = {
  login,
  signup,
  logout,
  addPost,
  editPost,
};
