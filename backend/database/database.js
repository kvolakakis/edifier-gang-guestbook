const mongoose = require("mongoose");
const path = require("path");
const config = require(path.resolve("config", "prod.js")); // change dev.js to prod.js for production (dockerized version)
async function startup() {
  console.log(config.mongo);
  await mongoose.connect(config.mongo.uri, config.mongo.options);
  console.log("[MongoDB] Database connection succeeded..");
}

module.exports = {
  startup,
};
