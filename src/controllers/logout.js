const logout = (req, res) => {
  res.clearCookie('token').json({ redirect: '/' });
};

module.exports = { logout };
