const Joi = require('joi');

const idSchema = Joi.object({
  postId: Joi.number().required(),
});

const postIdValidation = (dataObj) => idSchema.validateAsync(dataObj);

module.exports = { postIdValidation };
