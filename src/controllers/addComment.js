const { addCommentQuery } = require('../database/queries');
const { postIdValidation, newCommentValidation } = require('../utils/validation');

const addComment = (req, res) => {
  const userId = req.user.id;
  const { postId } = req.params;
  const { comment } = req.body;
  Promise.all([postIdValidation(req.params), newCommentValidation(req.body)])
    .then(() => addCommentQuery({ comment, userId, postId }))
    .then(() => res.status(201).json({ status: 201, message: 'comment added' }))
    .catch((err) => res.json(err));
};
module.exports = { addComment };
