const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/).required(),
});

const signupValidation = (dataObj) => signupSchema.validateAsync(dataObj);

module.exports = { signupValidation };
