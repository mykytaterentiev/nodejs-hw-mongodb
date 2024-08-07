import Joi from 'joi';

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'any.required': '{{#label}} Is Required',
    'string.min': 'Min string length is not achieved. {{#limit}} required',
    'string.max': 'Max string length is not achieved',
  }),
  phoneNumber: Joi.string().min(3).max(15).messages({
    'any.required': '{{#label}} Is Required',
    'string.min': 'Min string length is not achieved. {{#limit}} required',
    'string.max': 'Max phone number length is not achieved',
  }),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('home', 'personal', 'work'),
});