const { connection } = require('../config');

const msgObj = {
  '-1': 'downVoted',
  1: 'upVoted',
};

const addCommentVoteQuery = ({ userId, commentId, voteValue }) => connection.query('INSERT INTO comments_votes (user_id,comment_id,comment_vote_value) VALUES ($1,$2,$3) RETURNING *;', [userId, commentId, voteValue])
  .then(({ rows }) => ({ status: 200, message: msgObj[rows[0].comment_vote_value] }));

module.exports = { addCommentVoteQuery };
