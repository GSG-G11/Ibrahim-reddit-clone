const {
  hasUserSavedCommentQuery, addCommentToSavedQuery, unsaveResaveCommentQuery, checkCommentIdQuery,
} = require('../database/queries');

const { customizedError } = require('../utils');
const { commentIdValidation } = require('../utils/validation');

const saveUnsaveComment = (req, res) => {
  const { commentId } = req.params;
  const userId = req.user.id;
  commentIdValidation(req.params)
    .then(() => hasUserSavedCommentQuery({ commentId, userId }))
    .then((dbRes) => {
      if (dbRes) {
        const { saveId, saveStatus } = dbRes;
        return unsaveResaveCommentQuery({ saveId, newSaveStatus: !saveStatus });
      } // chained nested promises down for perfomance purpose
      return checkCommentIdQuery({ commentId })
        .then(() => addCommentToSavedQuery({ commentId, userId }));
    })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(customizedError(400, 'bad request'));
    });
};

module.exports = { saveUnsaveComment };
