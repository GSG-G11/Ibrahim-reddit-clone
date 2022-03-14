const Joi = require('joi');

const commentSchema = Joi.object({
  comment: Joi.string().required(),
});

const newCommentValidation = (dataObj) => commentSchema.validateAsync(dataObj);

module.exports = { newCommentValidation };
