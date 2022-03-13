const { connection } = require('../config');

const deletePostQuery = ({ postId, userId }) => connection.query('DELETE FROM posts where id=$1 AND user_id=$2;', [postId, userId]);

module.exports = { deletePostQuery };
