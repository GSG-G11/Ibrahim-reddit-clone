const { editCommentQuery } = require('../database/queries');
const { editCommentValidation } = require('../utils/validation');

const editComment = (req, res) => {
  const userId = req.user.id;
  const { newComment, commentId } = req.body;

  editCommentValidation(req.body)
    .then(() => editCommentQuery({ newComment, commentId, userId }))
    .then(() => res.status(202).json({ status: 202, message: 'comment updated' }))
    .catch((err) => res.json(err));
};

module.exports = { editComment };
