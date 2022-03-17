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
    .then((token) => res.cookie('token', token, { maxAge: 31536000000, httpOnly: true }).cookie('info', JSON.stringify({ username, id }), { maxAge: 31536000000 }).json({ redirect: '/' }))
    .catch((err) => {
      if (err.details) {
        res.json(customizedError(400, err.details[0].message));
      } else {
        res.json(err);
      }
    });
};
module.exports = { login };
