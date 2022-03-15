const { connection } = require('../config');

const unsaveResaveCommentQuery = ({ newSaveStatus, saveId }) => connection.query('UPDATE saved_comments SET is_comment_saved=$1 WHERE id=$2 RETURNING *', [newSaveStatus, saveId])
  .then(({ rows }) => ({ status: 200, message: (rows[0].is_comment_saved ? 'saved' : 'unsaved') }));

module.exports = { unsaveResaveCommentQuery };
