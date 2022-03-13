const { editPostQuery } = require('../database/queries');
const { editPostValidation } = require('../utils/validation');

const editPost = (req, res) => {
  const userId = req.user.id;
  const { postId, newTitle, newDescription } = req.body;
  editPostValidation(req.body)
    .then(() => editPostQuery({
      postId, newTitle, newDescription, userId,
    }))
    .then(() => res.status(202).json({ status: 202, message: 'post updated' }))
    .catch((err) => res.json(err));
};
module.exports = { editPost };
