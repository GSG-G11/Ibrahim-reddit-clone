const logout = (req, res) => {
  res.clearCookie('token').clearCookie('info').json({ redirect: '/' });
};

module.exports = { logout };
