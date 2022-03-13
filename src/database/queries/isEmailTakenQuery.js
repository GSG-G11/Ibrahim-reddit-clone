const { connection } = require('../config');

const isEmailTakenQuery = ({ email }) => connection.query('SELECT * FROM users WHERE email=$1', [email])
  .then((data) => data.rows.length !== 0);

module.exports = { isEmailTakenQuery };
