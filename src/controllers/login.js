const { compare } = require('bcrypt');
const { getUserData } = require('../database/queries');
const { customizedError, signToken } = require('../utils');
const { loginValidation } = require('../utils/validation');

const login = (req, res, next) => {
  const { username, password } = req.body;
  let id;
  loginValidation(req.body)
    .then(() => getUserData({ username }))
    .then((userDbData) => {
      id = userDbData.id;
      return userDbData.password;
    })
    .then((hashedPassword) => compare(password, hashedPassword))
    .then((isMatch) => {
      if (isMatch) return signToken({ id, username });
      throw customizedError(400, 'wrong username or password');
    })
    .then((token) => res.cookie('token', token).json({ redirect: '/' }))
    .catch((err) => next(err));
};
module.exports = { login };