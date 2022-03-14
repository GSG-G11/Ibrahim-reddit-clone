const { connection } = require('../config');

const hasUserVotedCommentQuery = ({ userId, commentId }) => connection.query('SELECT * FROM comments_votes WHERE user_id=$1 AND comment_id=$2;', [userId, commentId])
  .then(({ rows }) => (rows.length === 0 ? false : {
    voteId: rows[0].id,
    voteValue: rows[0].comment_vote_value,
  }));

module.exports = { hasUserVotedCommentQuery };
