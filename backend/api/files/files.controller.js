const express = require("express");
const multer = require("multer");
const path = require("path");
const FileModel = require("./files.model.js").File;
const router = express.Router();
const modelRepository = require(path.resolve("database", "model-repository.js"));
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    let username = "admin";
    console.log(file);
    const ext = file.mimetype.split("/")[1];
    cb(null, `files/${username}-${Date.now()}-${file.originalname}`);
  },
});

const multerFilter = (req, file, cb) => {
  // apply filter based on MIME_TYPE_MAP
  const isValid = MIME_TYPE_MAP[file.mimetype];
  let error = isValid ? null : new Error("Invalid mime type!");
  cb(error, isValid);
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = new FileModel();
    file.filename = req.body.filename;
    file.filepath = req.file.path;
    file.createdBy = req.body.createdBy;
    const savedFile = await modelRepository.create(FileModel, file);
    res.send(savedFile);
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const files = await modelRepository.find(FileModel, {});
    res.send(files);
  } catch (error) {
    console.error(error);
    res.status(404).send({ error: "NOT FOUND" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const file = await modelRepository.findById(FileModel, req.params.id, req.query);
    res.send(file);
  } catch (error) {
    console.error(error);
    res.status(404).send({ error: "NOT FOUND" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = await modelRepository.deleteById(FileModel, req.params.id);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.delete("/", async (req, res) => {
  try {
    const response = await modelRepository.deleteAll(FileModel, req.query);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = router;
