const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('./middlewares/logger');
const urlRoutes = require('./routes/urlRoutes');

require('dotenv').config();

const app = express();
const PORT = 5000;
app.use(logger);
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', urlRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
