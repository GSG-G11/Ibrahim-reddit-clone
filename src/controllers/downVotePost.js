const {
  hasUserVotedPostQuery, addPostVoteQuery, updatePostVoteQuery, checkPostIdQuery,
} = require('../database/queries');
// const { customizedError } = require('../utils');
const { postIdValidation } = require('../utils/validation');

const downVotePost = (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;
  postIdValidation(req.params)
    .then(() => hasUserVotedPostQuery({ postId, userId }))
    .then((dbRes) => {
      if (dbRes) {
        const { voteId, voteValue } = dbRes;
        if (voteValue === -1) {
          return updatePostVoteQuery({ voteId, voteValue: 0 });
        }
        return updatePostVoteQuery({ voteId, voteValue: -1 });
      } // nested promises down for perfomance purpose
      return checkPostIdQuery({ postId }).then(addPostVoteQuery({ postId, userId, voteValue: -1 }));
    })
    .then((data) => res.json(data));
};

module.exports = { downVotePost };
