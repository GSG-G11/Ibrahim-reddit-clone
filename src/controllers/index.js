const { addPost } = require('./addPost');
const { deletePost } = require('./deletePost');
const { editPost } = require('./editPost');
const { login } = require('./login');
const { logout } = require('./logout');
const { saveUnsavePost } = require('./saveUnsavePost');
const { signup } = require('./signup');

module.exports = {
  login,
  signup,
  logout,
  addPost,
  editPost,
  deletePost,
  saveUnsavePost,
};
