const { connection } = require('../config');

const addCommentQuery = ({ comment, userId, postId }) => connection.query('INSERT INTO comments (comment,post_id,user_id) VALUES ($1,$2,$3);', [comment, postId, userId]);

module.exports = { addCommentQuery };
