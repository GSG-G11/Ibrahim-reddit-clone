const { connection } = require('../config');

const msgObj = {
  '-1': 'downVoted',
  1: 'upVoted',
};

const addPostVoteQuery = ({ userId, postId, voteValue }) => connection.query('INSERT INTO posts_votes (user_id,post_id,post_vote_value) VALUES ($1,$2,$3) RETURNING *;', [userId, postId, voteValue])
  .then(({ rows }) => ({ status: 200, message: msgObj[rows[0].post_vote_value] }));

module.exports = { addPostVoteQuery };
