const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().required().min(3).max(30).messages({
    "string.min": "Name should be at least 3 characters",
    "string.max": "Name should not exceed 30 charcters",
  }),
  email: Joi.string().email().required(),
  city: Joi.string().required(),
  password: Joi.string().min(8).required(),
  phoneNumber: Joi.number().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
