const { connection } = require('../config');

const addCommentVoteQuery = ({ userId, commentId, voteValue }) => connection.query('INSERT INTO comments_votes (user_id,comment_id,comment_vote_value) VALUES ($1,$2,$3);', [userId, commentId, voteValue]);

module.exports = { addCommentVoteQuery };
