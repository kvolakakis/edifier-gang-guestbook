
const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const cors = require("cors");
const database = require(path.resolve("database", "database.js"));
const bodyParser = require("body-parser");
const usersController = require(path.resolve("api", "users", "users.controller.js"));
// app definition and methods implementation
app
  .use(bodyParser.json({ limit: "50MB" }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

(async function startupDatabase() {
  try {
    database.startup();
  } catch (e) {
    console.error(e);
  }
})();

app.use('/api/users', usersController);