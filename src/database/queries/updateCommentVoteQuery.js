const { connection } = require('../config');

const updateCommentVoteQuery = ({ voteValue, voteId }) => connection.query('UPDATE comments_votes SET comment_vote_value=$1 WHERE id=$2', [voteValue, voteId]);

module.exports = { updateCommentVoteQuery };
