const { addPost } = require('./addPost');
const { deletePost } = require('./deletePost');
const { downVotePost } = require('./downVotePost');
const { editPost } = require('./editPost');
const { login } = require('./login');
const { logout } = require('./logout');
const { saveUnsavePost } = require('./saveUnsavePost');
const { signup } = require('./signup');
const { upVotePost } = require('./upVotePost');

module.exports = {
  login,
  signup,
  logout,
  addPost,
  editPost,
  deletePost,
  saveUnsavePost,
  upVotePost,
  downVotePost,
};
