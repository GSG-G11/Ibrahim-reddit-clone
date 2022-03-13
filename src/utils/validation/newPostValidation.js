const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const newPostValidation = (dataObj) => postSchema.validateAsync(dataObj);

module.exports = { newPostValidation };
