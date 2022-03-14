const { connection } = require('../config');

const hasUserVotedPostQuery = ({ userId, postId }) => connection.query('SELECT * FROM posts_votes WHERE user_id=$1 AND post_id=$2;', [userId, postId])
  .then(({ rows }) => (rows.length === 0 ? false : {
    voteId: rows[0].id,
    voteValue: rows[0].post_vote_value,
  }));

module.exports = { hasUserVotedPostQuery };
