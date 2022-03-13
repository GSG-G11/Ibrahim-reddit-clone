const { connection } = require('../config');

const deleteCommentQuery = ({ commentId, userId }) => connection.query('DELETE FROM comments where id=$1 AND user_id=$2;', [commentId, userId]);

module.exports = { deleteCommentQuery };
