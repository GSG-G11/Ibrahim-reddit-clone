const { addPostQuery } = require('../database/queries');
const { newPostValidation } = require('../utils/validation');
const { upVotePost } = require('./upVotePost');

const addPost = (req, res) => {
  const userId = req.user.id;
  const { title, description } = req.body;
  newPostValidation(req.body)
    .then(() => addPostQuery({ title, description, userId }))
    .then((postId) => { req.params.postId = postId; })
    .then(() => upVotePost(req, res))
    .catch((err) => res.json(err));
};

module.exports = { addPost };
