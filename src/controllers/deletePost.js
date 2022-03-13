const { deletePostQuery } = require('../database/queries');
const { postIdValidation } = require('../utils/validation');

const deletePost = (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;
  postIdValidation(req.params)
    .then(() => deletePostQuery({ postId, userId }))
    .then(() => res.status(200).json({ status: 200, message: 'post deleted' }))
    .catch((err) => res.json(err));
};

module.exports = { deletePost };
