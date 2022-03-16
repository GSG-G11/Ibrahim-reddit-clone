const {
  hasUserVotedCommentQuery, addCommentVoteQuery, updateCommentVoteQuery, checkCommentIdQuery,
} = require('../database/queries');
// const { customizedError } = require('../utils');
const { commentIdValidation } = require('../utils/validation');

const downVoteComment = (req, res) => {
  const { commentId } = req.params;
  const userId = req.user.id;
  commentIdValidation(req.params)
    .then(() => hasUserVotedCommentQuery({ commentId, userId }))
    .then((dbRes) => {
      if (dbRes) {
        const { voteId, voteValue } = dbRes;
        if (voteValue === -1) {
          return updateCommentVoteQuery({ voteId, voteValue: 0 });
        }
        return updateCommentVoteQuery({ voteId, voteValue: -1 });
      } // chained nested promises down for perfomance purpose
      return checkCommentIdQuery({ commentId })
        .then(() => addCommentVoteQuery({ commentId, userId, voteValue: -1 }));
    })
    .then((data) => res.json(data));
};

module.exports = { downVoteComment };
