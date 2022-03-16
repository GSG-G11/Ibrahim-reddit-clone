const Joi = require('joi');

const commentSchema = Joi.object({
  newComment: Joi.string().required(),
  commentId: Joi.number().required(),
});

const editCommentValidation = (dataObj) => commentSchema.validateAsync(dataObj);

module.exports = { editCommentValidation };
