const express = require('express');
const multer = require('multer');
// Router Constant
const router = express.Router();
// Setup Multer Storage
var diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: diskStorage });

// @ROUTE  => /upload/multiple => /multiple
// @DESC   => uploads files locally to uploads folder
// @ACCESS => Public
router.post('/multiple', upload.array('files'), (req, res) => {
  return res.json({
    message: `${req.files.length} files uplaoded!`,
    files: req.files,
  });
});

module.exports = router;
