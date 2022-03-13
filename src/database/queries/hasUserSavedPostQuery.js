const { connection } = require('../config');

const hasUserSavedPostQuery = ({ userId, postId }) => connection.query('SELECT * FROM saved_posts WHERE user_id=$1 AND post_id=$2;', [userId, postId])
  .then(({ rows }) => (rows.length === 0 ? false : {
    postId: rows[0].id,
    saveStatus: rows[0].is_post_saved,
  }));

module.exports = { hasUserSavedPostQuery };
