const express = require("express");
const router = express.Router();
const multer = require("multer");

const uploadDestination = "uploads";

const storage = diskStorage({
  destination: uploadDestination,
  filename: function (req, file, callback) {
    callback(null, file.originalName);
  },
});

const uploads = multer({ storage: storage });

router.get("/register", (req, res) => {
  res.send("register");
});

module.exports = router;
