const { addCommentQuery } = require('./addCommentQuery');
const { addCommentToSavedQuery } = require('./addCommentToSavedQuery');
const { addCommentVoteQuery } = require('./addCommentVoteQuery');
const { addNewUserQuery } = require('./addNewUserQuery');
const { addPostQuery } = require('./addPostQuery');
const { addPostToSavedQuery } = require('./addPostToSavedQuery');
const { addPostVoteQuery } = require('./addPostVoteQuery');
const { checkCommentIdQuery } = require('./checkCommentIdQuery');
const { checkPostIdQuery } = require('./checkPostIdQuery');
const { deleteCommentQuery } = require('./deleteCommentQuery');
const { deletePostQuery } = require('./deletePostQuery');
const { editCommentQuery } = require('./editCommentQuery');
const { editPostQuery } = require('./editPostQuery');
const { getAllPostsQuery } = require('./getAllPostsQuery');
const { getUserData } = require('./getUserData');
const { hasUserSavedCommentQuery } = require('./hasUserSavedCommentQuery');
const { hasUserSavedPostQuery } = require('./hasUserSavedPostQuery');
const { hasUserVotedCommentQuery } = require('./hasUserVotedCommentQuery');
const { hasUserVotedPostQuery } = require('./hasUserVotedPostQuery');
const { isEmailTakenQuery } = require('./isEmailTakenQuery');
const { isUsernameTakenQuery } = require('./isUsernameTakenQuery');
const { unsaveResaveCommentQuery } = require('./unsaveResaveCommentQuery');
const { unsaveResavePostQuery } = require('./unsaveResavePostQuery');
const { updateCommentVoteQuery } = require('./updateCommentVoteQuery');
const { updatePostVoteQuery } = require('./updatePostVoteQuery');

module.exports = {
  addCommentQuery,
  addCommentToSavedQuery,
  addCommentVoteQuery,
  addNewUserQuery,
  addPostQuery,
  addPostToSavedQuery,
  addPostVoteQuery,
  deleteCommentQuery,
  deletePostQuery,
  editCommentQuery,
  editPostQuery,
  hasUserSavedPostQuery,
  hasUserVotedCommentQuery,
  hasUserVotedPostQuery,
  hasUserSavedCommentQuery,
  isEmailTakenQuery,
  isUsernameTakenQuery,
  unsaveResaveCommentQuery,
  unsaveResavePostQuery,
  updateCommentVoteQuery,
  updatePostVoteQuery,
  getUserData,
  checkPostIdQuery,
  checkCommentIdQuery,
  getAllPostsQuery,
};
