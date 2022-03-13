const { connection } = require('../config');

const unsaveResavePostQuery = ({ newSaveStatus, saveId }) => connection.query('UPDATE saved_posts SET is_post_saved=$1 WHERE id=$2', [newSaveStatus, saveId]);

module.exports = { unsaveResavePostQuery };
