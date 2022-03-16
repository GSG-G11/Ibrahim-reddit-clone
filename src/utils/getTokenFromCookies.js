const { verifyToken } = require('./jwt');

const getTokenFromCookies = (req, res, next) => {
  const { token } = req.cookies;
  verifyToken(token)
    .then((decodedToken) => { req.user = decodedToken; })
    .catch(() => { req.user = false; })
    .then(() => next());
};

module.exports = { getTokenFromCookies };
