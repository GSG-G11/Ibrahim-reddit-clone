const { addComment } = require('./addComment');
const { addPost } = require('./addPost');
const { deleteComment } = require('./deleteComment');
const { deletePost } = require('./deletePost');
const { downVoteComment } = require('./downVoteComment');
const { downVotePost } = require('./downVotePost');
const { editComment } = require('./editComment');
const { editPost } = require('./editPost');
const { login } = require('./login');
const { logout } = require('./logout');
const { saveUnsaveComment } = require('./saveUnsaveComment');
const { saveUnsavePost } = require('./saveUnsavePost');
const { signup } = require('./signup');
const { upVoteComment } = require('./upVoteComment');
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
  addComment,
  editComment,
  deleteComment,
  saveUnsaveComment,
  upVoteComment,
  downVoteComment,
};
