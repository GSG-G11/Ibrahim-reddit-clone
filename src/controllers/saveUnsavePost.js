const {
  hasUserSavedPostQuery, addPostToSavedQuery, unsaveResavePostQuery, checkPostIdQuery,
} = require('../database/queries');
const { customizedError } = require('../utils');
const { postIdValidation } = require('../utils/validation');

const saveUnsavePost = (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;
  postIdValidation(req.params)
    .then(() => hasUserSavedPostQuery({ postId, userId }))
    .then((dbRes) => {
      if (dbRes) {
        const { saveId, saveStatus } = dbRes;
        return unsaveResavePostQuery({ saveId, newSaveStatus: !saveStatus });
      } // nested promises down for perfomance purpose
      return checkPostIdQuery({ postId }).then(addPostToSavedQuery({ postId, userId }));
    })
    .then((data) => res.json(data))
    .catch(() => res.json(customizedError(400, 'bad request')));
};

module.exports = { saveUnsavePost };
