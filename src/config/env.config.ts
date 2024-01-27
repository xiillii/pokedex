export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodbUrl: process.env.MONGODB_URL,
  mongodbDatabase: process.env.MONGODB_DATABASE,
  runPort: +process.env.RUN_PORT || 3002,
  queryDefaultLimit: +process.env.QUERY_DEFAULT_LIMIT || 5,
  queryDefaultOffset: +process.env.QUERY_DEFAULT_OFFSET || 0,
});
