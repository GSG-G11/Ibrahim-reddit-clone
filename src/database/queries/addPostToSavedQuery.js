const { connection } = require('../config');

const addPostToSavedQuery = ({ userId, postId }) => connection.query('INSERT INTO saved_posts (is_post_saved,user_id,post_id) VALUES (true,$1,$2);', [userId, postId])
  .then(() => ({ status: 200, message: 'saved' }));

module.exports = { addPostToSavedQuery };
