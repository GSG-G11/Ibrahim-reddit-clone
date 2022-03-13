const { connection } = require('../config');

const addNewUserQuery = ({ username, email, hashedPassword }) => connection.query('INSERT INTO users (username,email,password) VALUES ($1,$2,$3);', [username, email, hashedPassword]);

module.exports = { addNewUserQuery };
