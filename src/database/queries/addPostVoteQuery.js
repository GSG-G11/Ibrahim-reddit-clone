const { connection } = require('../config');

const addPostVoteQuery = ({ userId, postId, voteValue }) => connection.query('INSERT INTO posts_votes (user_id,post_id,post_vote_value) VALUES ($1,$2,$3) RETURNING *;', [userId, postId, voteValue]);

module.exports = { addPostVoteQuery };
