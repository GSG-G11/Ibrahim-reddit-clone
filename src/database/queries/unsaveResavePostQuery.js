const { connection } = require('../config');

const unsaveResavePostQuery = ({ newStatus, saveId }) => connection.query('UPDATE saved_posts SET is_post_saved=$1 WHERE id=$2', [newStatus, saveId]);

module.exports = { unsaveResavePostQuery };
