const { customizedError } = require('../../utils');
const { connection } = require('../config');

const checkPostIdQuery = ({ postId }) => connection.query('SELECT * FROM posts where id=$1;', [postId])
  .then(({ rowCount }) => {
    if (rowCount === 0) throw customizedError(400, 'bad request');
  });

module.exports = { checkPostIdQuery };
