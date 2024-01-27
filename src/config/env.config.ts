export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  runport: process.env.RUN_PORT || 3002,
  queryDefaultLimit: +process.env.QUERY_DEFAULT_LIMIT || 5,
  queryDefaultOffset: +process.env.QUERY_DEFAULT_OFFSET || 0,
});
