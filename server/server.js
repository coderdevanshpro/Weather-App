const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const weatherRoute = require('./routes/weather');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Weather API is running 🚀');
  });

app.use(cors());
app.use('/weather', weatherRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
