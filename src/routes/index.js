const router = require('express').Router();
const {
  signup, login, logout, addPost, editPost, deletePost,
  saveUnsavePost, upVotePost, downVotePost, addComment,
  editComment, deleteComment, saveUnsaveComment,
  upVoteComment, downVoteComment,
} = require('../controllers');
const { getTokenFromCookies, verfiyUser } = require('../utils');

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.use(getTokenFromCookies);
// router.get('/home', (req, res) => { res.json(req.user); });
router.use(verfiyUser);
router.post('/post/add', addPost);
router.post('/post/edit', editPost);
router.get('/post/:postId/delete', deletePost);
router.get('/post/:postId/save', saveUnsavePost);
router.get('/post/:postId/upvote', upVotePost);
router.get('/post/:postId/downvote', downVotePost);

router.get('/post/:postId/comment/add', addComment);
router.get('/post/:postId/comment/edit', editComment);
router.get('/post/:postId/comment/:commentId/delete', deleteComment);
router.get('/post/:postId/comment/:commentId/save', saveUnsaveComment);
router.get('/post/:postId/comment/:commentId/upvote', upVoteComment);
router.get('/post/:postId/comment/:commentId/downvote', downVoteComment);

module.exports = router;
