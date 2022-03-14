const { customizedError } = require('../../utils');
const { connection } = require('../config');

const editCommentQuery = ({
  newComment, commentId, userId,
}) => connection.query('UPDATE comments SET comment=$1 WHERE id=$2 AND user_id=$3;', [newComment, commentId, userId])
  .then(({ rowCount }) => {
    if (rowCount === 0) throw customizedError(400, 'bad request');
  });

module.exports = { editCommentQuery };
