const { hash } = require('bcrypt');
const { isEmailTakenQuery, isUsernameTakenQuery, addNewUserQuery } = require('../database/queries');
const { signupValidation } = require('../utils/validation');
const { login } = require('./login');

const signup = (req, res, next) => {
  const { username, email, password } = req.body;
  signupValidation(req.body)
    .then(() => Promise.all([isEmailTakenQuery({ email }), isUsernameTakenQuery({ username })]))
    .then(() => hash(password, 10))
    .then((hashedPassword) => addNewUserQuery({ username, email, hashedPassword }))
    .then(() => res.status(201))
    .then(() => login({ ...req, body: { username, password } }, res, next))
    .catch((err) => next(err));
};
module.exports = { signup };
