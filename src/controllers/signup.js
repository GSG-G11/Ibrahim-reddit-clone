const { hash } = require('bcrypt');
const { isEmailTakenQuery, isUsernameTakenQuery, addNewUserQuery } = require('../database/queries');
const { customizedError } = require('../utils');
const { signupValidation } = require('../utils/validation');

const signup = (req, res, next) => {
  const { username, email, password } = req.body;
  signupValidation(req.body)
    .then(() => Promise.all([isEmailTakenQuery({ email }), isUsernameTakenQuery({ username })]))
    .catch((err) => next(err))
    .then(() => hash(password, 10))
    .then((hashedPassword) => addNewUserQuery({ username, email, hashedPassword }))
    .then((dbRes) => res.json(dbRes))
    .catch(() => customizedError(503, 'server error'));

  // res.status(201).json({ status: 201, message: 'new account created successfully' });
};
module.exports = { signup };
