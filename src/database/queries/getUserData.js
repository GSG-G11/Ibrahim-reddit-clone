const { customizedError } = require('../../utils');
const { connection } = require('../config');

const getUserData = ({ username }) => connection.query('SELECT * FROM users WHERE username=$1', [username])
  .then((data) => {
    if (data.rows.length === 0) throw customizedError(400, 'wrong username or password');
    return data.rows[0];
  });

module.exports = { getUserData };
