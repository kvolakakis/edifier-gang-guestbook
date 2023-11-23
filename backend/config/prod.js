const config = {

  // application environment mode
  environment: process.env.ENVIRONMENT || "development",

  // host domain options
  protocol: process.env.PROTOCOL || 'http',
  host: process.env.HOST || "localhost",
  exposedPort: 3000,
  // exposedPort: process.env.EXPOSED_PORT,
  port: 3000,
  // port: process.env.DEV_BACKEND_PORT || 8181,

  // MongoDB connection options
  mongo: {
    uri: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/?authSource=admin`,
    // uri: "mongodb://127.0.0.1:27017/protovision?authSource=admin",
    options: {
      dbName: process.env.DB_NAME,
      user: process.env.DB_ROOT_USERNAME,
      pass: process.env.DB_ROOT_PASSWORD,
    }
  },
};
/**
 * Get full host domain
 * e.g. http://localhost:8181
 *
 * @export
 * @returns {string}
 */
function getHostDomain() {
  return `${config.protocol}://${config.host}:${config.port}`;
}


module.exports = config;