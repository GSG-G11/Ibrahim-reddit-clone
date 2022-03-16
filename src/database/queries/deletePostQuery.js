const { customizedError } = require('../../utils');
const { connection } = require('../config');

const deletePostQuery = ({ postId, userId }) => connection.query('DELETE FROM posts where id=$1 AND user_id=$2;', [postId, userId])
  .then(({ rowCount }) => {
    if (rowCount === 0) throw customizedError(400, 'bad request');
  });

module.exports = { deletePostQuery };
