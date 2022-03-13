const { addPostQuery } = require('../database/queries');
const { newPostValidation } = require('../utils/validation');

const addPost = (req, res) => {
  const userId = req.user.id;
  const { title, description } = req.body;
  newPostValidation(req.body)
    .then(() => addPostQuery({ title, description, userId }))
    .then(() => res.status(201).json({ status: 201, message: 'post added' }))
    .catch((err) => res.json(err));
};

module.exports = { addPost };
