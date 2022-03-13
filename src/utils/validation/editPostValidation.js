const Joi = require('joi');

const postSchema = Joi.object({
  newTitle: Joi.string().required(),
  newDescription: Joi.string().required(),
  postId: Joi.number().required(),
});

const editPostValidation = (dataObj) => postSchema.validateAsync(dataObj);

module.exports = { editPostValidation };
