const { connection } = require('../config');

const isUsernameTakenQuery = ({ username }) => connection.query('SELECT * FROM users WHERE username=$1', [username])
  .then((data) => data.rows.length !== 0);

module.exports = { isUsernameTakenQuery };
