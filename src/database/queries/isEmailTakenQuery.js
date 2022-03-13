const { customizedError } = require('../../utils');
const { connection } = require('../config');

const isEmailTakenQuery = ({ email }) => connection.query('SELECT * FROM users WHERE email=$1', [email])
  .then((data) => {
    if (data.rows.length !== 0) throw customizedError(400, 'email is taken');
  });

module.exports = { isEmailTakenQuery };
