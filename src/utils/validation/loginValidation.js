const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/).required(),
});

const loginValidation = (dataObj) => loginSchema.validateAsync(dataObj);

module.exports = { loginValidation };
