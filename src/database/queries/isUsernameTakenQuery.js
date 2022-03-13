const { customizedError } = require('../../utils');
const { connection } = require('../config');

const isUsernameTakenQuery = ({ username }) => connection.query('SELECT * FROM users WHERE username=$1', [username])
  .then((data) => {
    if (data.rows.length !== 0) throw customizedError(400, 'username is taken, try another one');
  });

module.exports = { isUsernameTakenQuery };
