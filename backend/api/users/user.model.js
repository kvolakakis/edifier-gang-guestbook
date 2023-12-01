const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
      username: { type: String, required: true, default: "unidentified user" },
      password: { type: String, required: true, default: "" },
    },
    { timestamps: { createdAt: true } }
);

const User = mongoose.model("User", userSchema);

module.exports = {
  userSchema,
  User,
};
