const config = {

    // application environment mode
    environment: "development",
  
    // host domain options
    protocol: 'http',
    host: "localhost",
    exposedPort: 3000,
    // exposedPort: process.env.EXPOSED_PORT,
    port: 3000,
    // port: process.env.DEV_BACKEND_PORT || 8181,
  
    // MongoDB connection options
    mongo: {
      uri: `mongodb://127.0.0.1:27017/`,
      options: {}
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