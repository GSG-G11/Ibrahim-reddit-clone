const router = require('express').Router();
const {
  signup, login, logout, addPost, editPost, deletePost, saveUnsavePost,
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
router.get('/post/:id/delete', deletePost);
router.get('/post/:id/save', saveUnsavePost);

module.exports = router;
