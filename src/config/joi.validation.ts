import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB_URL: Joi.required(),
  MONGODB_DATABASE: Joi.required(),
  RUN_PORT: Joi.number().default(3005),
  QUERY_DEFAULT_LIMIT: Joi.number().default(10),
  QUERY_DEFAULT_OFFSET: Joi.number().default(0),
});
