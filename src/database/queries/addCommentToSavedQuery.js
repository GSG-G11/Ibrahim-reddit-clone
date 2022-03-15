const { connection } = require('../config');

const addCommentToSavedQuery = ({ userId, commentId }) => connection.query('INSERT INTO saved_comments (is_comment_saved,user_id,comment_id) VALUES (true,$1,$2);', [userId, commentId])
  .then(() => ({ status: 200, message: 'saved' }));

module.exports = { addCommentToSavedQuery };
