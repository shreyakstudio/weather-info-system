const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('src'));
app.use(express.json());

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  
  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await axios.get(url);
    const data = response.data;

    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      wind_speed: Math.round(data.wind.speed * 3.6),
      description: data.weather[0].description,
      icon: data.weather[0].icon
    };

    res.json(weatherData);
  } catch (error) {
    res.status(404).json({ error: 'City not found. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Weather server running on port ${PORT}`);
});

module.exports = app;
