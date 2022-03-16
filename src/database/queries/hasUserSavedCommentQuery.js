const { connection } = require('../config');

const hasUserSavedCommentQuery = ({ userId, commentId }) => connection.query('SELECT * FROM saved_comments WHERE user_id=$1 AND comment_id=$2;', [userId, commentId])
  .then(({ rows }) => (rows.length === 0 ? false : {
    saveId: rows[0].id,
    saveStatus: rows[0].is_comment_saved,
  }));

module.exports = { hasUserSavedCommentQuery };
