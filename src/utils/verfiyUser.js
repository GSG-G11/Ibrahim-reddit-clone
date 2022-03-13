const verfiyUser = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.json({ redirect: '/login' });
  }
};

module.exports = { verfiyUser };
