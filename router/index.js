const express = require('express');
const uploadRouter = require('./routes/upload');
const downloadRouter = require('./routes/download');
// API constant
const router = express.Router();
// API Router
router.use('/upload', uploadRouter);
router.use('/download', downloadRouter);
// Fallback API Call
router.use('*', (req, res) => {
  const payload = {
    message: ' API Connected!',
    error: 'Route not defined',
  };
  return res.status(200).json({ payload });
});

module.exports = router;
