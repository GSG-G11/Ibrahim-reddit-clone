const { connection } = require('../config');

const unsaveResavePostQuery = ({ newSaveStatus, saveId }) => connection.query('UPDATE saved_posts SET is_post_saved=$1 WHERE id=$2 RETURNING *', [newSaveStatus, saveId])
  .then(({ rows }) => ({ status: 200, message: (rows[0].is_post_saved ? 'saved' : 'unsaved') }));

module.exports = { unsaveResavePostQuery };
