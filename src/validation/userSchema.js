import Joi from 'joi';

export const redisterUserSchema = Joi.object({
          name: Joi.string().min().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required(),
});

export const loginUserSchema = Joi.object({
          email: Joi.string().email().required(),       
          password: Joi.string().required(),       
});