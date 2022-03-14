const { customizedError } = require('../../utils');
const { connection } = require('../config');

const deleteCommentQuery = ({ commentId, userId }) => connection.query('DELETE FROM comments where id=$1 AND user_id=$2;', [commentId, userId])
  .then(({ rowCount }) => {
    if (rowCount === 0) throw customizedError(400, 'bad request');
  });

module.exports = { deleteCommentQuery };
