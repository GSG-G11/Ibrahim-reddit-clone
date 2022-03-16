const { sign, verify } = require('jsonwebtoken');

const signToken = (userInfoObj) => new Promise((resolve, reject) => {
  sign(userInfoObj, process.env.SECRECT_KEY, (err, token) => {
    if (err) reject(err);
    resolve(token);
  });
});

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRECT_KEY, (err, decoded) => {
    if (err) reject(err);
    resolve(decoded);
  });
});

module.exports = { signToken, verifyToken };
