const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
    {
      title: { type: String, required: false, default: "" },
      description: { type: String, required: false, default: "" },
      likes: { type: Array, required: true, default: []},
      files: { type: Array, required: true, default: []},
      user: { type: String, required: true, default: "incognito user" },
    },
    { timestamps: { createdAt: true } }
);

const Post = mongoose.model("post", postSchema);

module.exports = {
  postSchema,
  Post,
};
