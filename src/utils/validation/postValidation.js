const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const postValidation = (dataObj) => postSchema.validateAsync(dataObj);

module.exports = { postValidation };
