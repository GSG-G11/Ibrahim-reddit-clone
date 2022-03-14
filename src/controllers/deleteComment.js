const { deleteCommentQuery } = require('../database/queries');
const { commentIdValidation } = require('../utils/validation');

const deleteComment = (req, res) => {
  const { commentId } = req.params;
  const userId = req.user.id;
  commentIdValidation(req.params)
    .then(() => deleteCommentQuery({ commentId, userId }))
    .then(() => res.status(200).json({ status: 200, message: 'comment deleted' }))
    .catch((err) => res.json(err));
};

module.exports = { deleteComment };
