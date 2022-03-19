const express = require('express');
const multer = require('multer');
// Router Constant
const router = express.Router();

// @ROUTE  => /download => /
// @DESC   => downloads a file
// @ACCESS => Public
router.get('/', (req, res) => {
  return res.download(req.query.name);
});

module.exports = router;
