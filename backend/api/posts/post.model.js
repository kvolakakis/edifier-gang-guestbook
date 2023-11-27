const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
    {
      title: { type: String, required: true, default: "UUUNTITLED" },
      description: { type: String, required: false, default: "" },
      files: { type: Array, required: true, default: []},
      user: { type: String, required: true, default: "incognito user" },
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);

const Post = mongoose.model("post", postSchema);

module.exports = {
  postSchema,
  Post,
};
