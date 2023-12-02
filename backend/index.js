const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const cors = require("cors");
const database = require(path.resolve("database", "database.js"));
const bodyParser = require("body-parser");
const PostModel = require(path.resolve("api", "posts", "post.model.js")).Post;
const modelRepository = require(path.resolve("database", "model-repository.js"));
const usersController = require(path.resolve(
  "api",
  "users",
  "users.controller.js"
));
const postsController = require(path.resolve(
  "api",
  "posts",
  "posts.controller.js"
));
const filesController = require(path.resolve(
  "api",
  "files",
  "files.controller.js"
));

// app definition and methods implementation
app
  .use(bodyParser.json({ limit: "50MB" }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const io = require("socket.io")(
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
);

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.emit("welcome", "Welcome to the chat!");
  broadcast();
});

broadcast = () =>{
  io.sockets.emit("posts-updated", { });
}

(async function startupDatabase() {
  try {
    database.startup();
  } catch (e) {
    console.error(e);
  }
})();

app.use("/api/users", usersController);
app.post('/api/posts/', async (req, res) => {
  try {
      const post = new PostModel();
      post.createdBy = req.body.createdBy;

      //if no c reatedBy is provided, return error that you must be logged in to create a post
      if (!post.createdBy) {
          res.status(400).send({ error: 'You must be logged in to create a post' });
          return;
      }
      post.title = req.body.title;
      post.description = req.body.description;
      post.files = req.body.files;
      const savedPost = await modelRepository.create(PostModel, post);
      // I want to broadcast here
      broadcast();
      res.send(savedPost);
  } catch (e) {
      console.error(e);
      res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.put('/api/posts/:id', async (req, res) => {
  try {
      const post = await modelRepository.update(PostModel, req.params.id, req.body);
      broadcast();
      res.send(post);
  } catch (e) {
      console.error(e);
      res.status(500).send({ error: 'Internal Server Error' });
  }
});
app.use("/api/posts", postsController);
app.use("/api/files", filesController);
app.use("/api/public", express.static(path.join(__dirname, "public")));