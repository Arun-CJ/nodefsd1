const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().required().min(3).max(30).messages({
    "string.min": "Name should be at least 3 characters",
    "string.max": "Name should not exceed 30 charcters",
  }),
  email: Joi.string().email().required(),
  city: Joi.string().required().max(3),
  password: Joi.string().min(8).required(),
  phoneNumber: Joi.number().required(),
});

module.exports = {
  registerSchema,
};
