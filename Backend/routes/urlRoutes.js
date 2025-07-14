const express = require('express');
const router = express.Router();

const {
  createShortUrl,
  getOriginalUrl,
} = require('../controllers/urlController');

router.post('/shorten', createShortUrl);
router.get('/url/:shortCode', getOriginalUrl);

module.exports = router;
