const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const API_KEY = process.env.WEATHER_API_KEY;

router.get('/', async (req, res) => {
  const city = req.query.city;

  console.log(city);

  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  try {
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
    //console.log(API_KEY);
    //console.log("Weather API URL:", weatherUrl);
    const response = await axios.get(weatherUrl);
    //console.log(response);
    const data = response.data;

    const weatherData = {
      city: data.location.name,
      country:data.location.country,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      icon: `https:${data.current.condition.icon}`, 
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph, 
    };

    res.json(weatherData);
  } catch (err) {
    res.status(404).json({ error: 'City not found or API error' });
  }
});

module.exports = router;