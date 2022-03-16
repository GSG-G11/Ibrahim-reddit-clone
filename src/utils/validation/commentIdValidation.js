const Joi = require('joi');

const idSchema = Joi.object({
  commentId: Joi.number().required(),
});

const commentIdValidation = (dataObj) => idSchema.validateAsync(dataObj);

module.exports = { commentIdValidation };
