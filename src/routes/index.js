const router = require('express').Router();
const {
  signup, login, logout, addPost,
} = require('../controllers');
const { getTokenFromCookies, verfiyUser } = require('../utils');

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.use(getTokenFromCookies);
// router.get('/home', (req, res) => { res.json(req.user); });
router.use(verfiyUser);
router.post('/post/add', addPost);
// router.route('/post/:id')

module.exports = router;
