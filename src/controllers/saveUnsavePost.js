const { hasUserSavedPostQuery, addPostToSavedQuery, unsaveResavePostQuery } = require('../database/queries');
const { customizedError } = require('../utils');
const { postIdValidation } = require('../utils/validation');

const saveUnsavePost = (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;
  postIdValidation(req.params)
    .then(() => hasUserSavedPostQuery({ postId, userId }))
    .then((dbRes) => {
      if (dbRes) {
        const { saveId, saveStatus } = dbRes;
        return unsaveResavePostQuery({ saveId, newSaveStatus: !saveStatus });
      }
      return addPostToSavedQuery({ postId, userId });
    })
    .then((data) => res.json(data))
    .catch(() => res.json(customizedError(400, 'bad request')));
};

module.exports = { saveUnsavePost };
