const { addCommentQuery, checkPostIdQuery } = require('../database/queries');
const { newCommentValidation } = require('../utils/validation');

const addComment = (req, res) => {
  const userId = req.user.id;
  const { postId, comment } = req.body;
  newCommentValidation(req.body)
    .then(() => checkPostIdQuery({ postId }))
    .then(() => addCommentQuery({ comment, userId, postId }))
    .then(() => res.status(201).json({ status: 201, message: 'comment added' }))
    .catch((err) => res.json(err));
};
module.exports = { addComment };
