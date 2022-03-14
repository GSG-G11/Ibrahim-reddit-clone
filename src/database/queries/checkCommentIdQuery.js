const { customizedError } = require('../../utils');
const { connection } = require('../config');

const checkCommentIdQuery = ({ commentId }) => connection.query('SELECT * FROM comments where id=$1;', [commentId])
  .then(({ rowCount }) => {
    if (rowCount === 0) throw customizedError(400, 'bad request');
  });

module.exports = { checkCommentIdQuery };
