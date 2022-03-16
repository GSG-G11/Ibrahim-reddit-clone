const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().pattern(/^[a-zA-Z0-9_-]{3,20}$/).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/).required(),
});

const signupValidation = (dataObj) => signupSchema.validateAsync(dataObj);

module.exports = { signupValidation };
