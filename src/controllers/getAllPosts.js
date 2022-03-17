const { getAllPostsQuery } = require('../database/queries');

const getAllPosts = (req, res) => {
  const userId = req.user.id;
  if (userId) {
    getAllPostsQuery(userId)
      .then((data) => res.json(data));
  } else {
    getAllPostsQuery(1)
      .then((data) => res.json(data));
  }
};
module.exports = { getAllPosts };
