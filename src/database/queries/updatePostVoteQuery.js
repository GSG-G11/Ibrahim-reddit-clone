const { connection } = require('../config');

const updatePostVoteQuery = ({ voteValue, voteId }) => connection.query('UPDATE posts_votes SET post_vote_value=$1 WHERE id=$2', [voteValue, voteId]);

module.exports = { updatePostVoteQuery };
