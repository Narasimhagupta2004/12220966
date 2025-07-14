const { nanoid } = require('nanoid');
const Url = require('../models/Url');

const createShortUrl = async (req, res) => {
  const { originalUrl, customCode, validity } = req.body;
  const shortCode = customCode || nanoid(6);

  const codeRegex = /^[a-zA-Z0-9]{4,12}$/;
  if (customCode && !codeRegex.test(customCode)) {
    return res.status(400).json({ message: 'Invalid custom shortcode' });
  }

  const exists = await Url.findOne({ shortCode });
  if (exists) return res.status(400).json({ message: 'Shortcode already exists' });

  const now = new Date();
  const expiresAt = new Date(now.getTime() + (validity || 30) * 60000);

  const newUrl = new Url({ originalUrl, shortCode, expiresAt });
  await newUrl.save();

  res.status(201).json({ shortCode });
};

const getOriginalUrl = async (req, res) => {
  const { shortCode } = req.params;

  const url = await Url.findOne({ shortCode });
  if (!url || new Date() > url.expiresAt) {
    return res.status(404).json({ message: 'URL not found or expired' });
  }

  res.json({ originalUrl: url.originalUrl });
};

module.exports = {
  createShortUrl,
  getOriginalUrl,
};
