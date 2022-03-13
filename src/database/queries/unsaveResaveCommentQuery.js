const { connection } = require('../config');

const unsaveResaveCommentQuery = ({ newSaveStatus, saveId }) => connection.query('UPDATE saved_comments SET is_comment_saved=$1 WHERE id=$2', [newSaveStatus, saveId]);

module.exports = { unsaveResaveCommentQuery };
