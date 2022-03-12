const { connection } = require('../config');

const editPostQuery = ({
  postId, newTitle, newDescription, userId,
}) => connection.query('UPDATE posts SET title=$1, description=$2 WHERE id=$3 AND user_id=$4;', [newTitle, newDescription, postId, userId]);

module.exports = { editPostQuery };
