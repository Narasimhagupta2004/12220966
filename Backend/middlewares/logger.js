const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/app.log');

const logger = (req, res, next) => {
  const logEntry = `${new Date().toISOString()} | ${req.method} ${req.originalUrl}\n`;
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Failed to write log:', err);
    }
  });
  next();
};

module.exports = logger;
