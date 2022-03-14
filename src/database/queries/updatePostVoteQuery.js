const { connection } = require('../config');

const msgObj = {
  '-1': 'downVoted',
  0: 'not voted anymore',
  1: 'upVoted',
};
const updatePostVoteQuery = ({ voteValue, voteId }) => connection.query('UPDATE posts_votes SET post_vote_value=$1 WHERE id=$2 RETURNING *', [voteValue, voteId])
  .then(({ rows }) => ({ status: 200, message: msgObj[rows[0].post_vote_value] }));

module.exports = { updatePostVoteQuery };
