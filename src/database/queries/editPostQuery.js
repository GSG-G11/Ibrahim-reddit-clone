const { customizedError } = require('../../utils');
const { connection } = require('../config');

const editPostQuery = ({
  postId, newTitle, newDescription, userId,
}) => connection.query('UPDATE posts SET title=$1, description=$2 WHERE id=$3 AND user_id=$4 RETURNING *;', [newTitle, newDescription, postId, userId])
  .then(({ rowCount }) => {
    if (rowCount === 0) throw customizedError(400, 'bad request');
  });

module.exports = { editPostQuery };
