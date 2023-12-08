const express = require("express");
const server = express();
const multer = require("multer");
const upload = multer();
server.post("/", upload.single("file"), async (req, res) => {
  console.log(req.file, "insert");
  if (req.file.mimetype === "image/png" || req.file.mimetype === "image/jpeg") {
    const base64String = req.file.buffer.toString("base64");
    return res.status(200).json({
      success: true,
      message: "File upload successfully",
      data: base64String,
    });
  } else {
    return res.status(400).json({
      success: true,
      message: "Please upload PNG or JPG file format",
    });
  }
});

server.listen(3001);
