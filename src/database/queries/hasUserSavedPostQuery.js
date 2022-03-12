const { connection } = require('../config');

const hasUserSavedPostQuery = ({ userId, postID }) => connection.query('SELECT * FROM saved_posts WHERE user_id=$1 AND post_id=$2;', [userId, postID])
  .then(({ rows }) => (rows.length === 0 ? false : rows[0].id));

module.exports = { hasUserSavedPostQuery };
