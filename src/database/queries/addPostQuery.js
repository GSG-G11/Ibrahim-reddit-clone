const { connection } = require('../config');

const addPostQuery = ({ title, description, userId }) => connection.query('INSERT INTO posts (title,description,user_id) VALUES ($1,$2,$3) RETURNING *;', [title, description, userId])
  .then(({ rows }) => rows[0].id);

module.exports = { addPostQuery };
