const verfiyUser = (req, res, next) => {
  if (req.user) next();
  res.json({ redirect: '/login' });
};

module.exports = { verfiyUser };
