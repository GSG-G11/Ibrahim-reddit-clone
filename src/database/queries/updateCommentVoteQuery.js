const { connection } = require('../config');

const msgObj = {
  '-1': 'downVoted',
  0: 'not voted anymore',
  1: 'upVoted',
};

const updateCommentVoteQuery = ({ voteValue, voteId }) => connection.query('UPDATE comments_votes SET comment_vote_value=$1 WHERE id=$2 RETURNING *', [voteValue, voteId])
  .then(({ rows }) => ({ status: 200, message: msgObj[rows[0].comment_vote_value] }));

module.exports = { updateCommentVoteQuery };
