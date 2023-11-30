const mongoose = require("mongoose");
const fileSchema = new mongoose.Schema(
    {
      filename: { type: String, required: true, default: "unidentified file" },
      filepath: { type: String, required: true },
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: { createdAt: true } }
);

const File = mongoose.model("File", fileSchema);

module.exports = {
    fileSchema,
    File,
};