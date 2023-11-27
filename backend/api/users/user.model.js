const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const userSchema = new mongoose.Schema(
    {
      username: { type: String, required: true, default: "unidentified user" },
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);

const User = mongoose.model("User", userSchema);

module.exports = {
  userSchema,
  User,
};
