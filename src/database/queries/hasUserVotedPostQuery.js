const { connection } = require('../config');

const hasUserVotedPostQuery = ({ userId, postID }) => connection.query('SELECT * FROM posts_votes WHERE user_id=$1 AND post_id=$2;', [userId, postID])
  .then(({ rows }) => (rows.length === 0 ? false : rows[0].id));

module.exports = { hasUserVotedPostQuery };
