const Joi = require('joi');

const idSchema = Joi.object({
  postId: Joi.number().required(),
  commentId: Joi.number().required(),
});

const commentIdValidation = (dataObj) => idSchema.validateAsync(dataObj);

module.exports = { commentIdValidation };
