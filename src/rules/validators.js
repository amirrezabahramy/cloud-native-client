import Joi from "joi";
import messages from "./messages";

export default {
  required: () => Joi.string().trim().required(),
  // .messages({
  //   "string.empty": messages.required,
  // }),
  firstName: () => Joi.string().trim().min(4).required(),
  lastName: () => Joi.string().trim().min(4).required(),
  email: () =>
    Joi.string()
      .trim()
      .email({ tlds: { allow: false } }),
  username: () => Joi.string().trim().min(4).required(),
  // .messages({
  //   "string.empty": messages.required,
  //   "string.min": messages.minLength(4),
  // }),
  password: () => Joi.string().trim().min(8).max(32).required(),
  // .messages({
  //   "string.empty": messages.required,
  //   "string.min": messages.minLength(8),
  //   "string.max": messages.maxLength(32),
  // }),
  confirmPassword: (refName) => Joi.valid(Joi.ref(refName)),
  role: (...roles) =>
    Joi.string()
      .trim()
      .valid(...roles),
};
