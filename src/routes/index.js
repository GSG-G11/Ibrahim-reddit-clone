const router = require('express').Router();
const { signup } = require('../controllers/signup');

router.post('/signup', signup);

module.exports = router;
