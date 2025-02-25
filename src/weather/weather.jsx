import React, {useState, useEffect} from 'react';
import './weather.css';



const WeatherIcon = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=3b1f4e9e7f1d3b8b2f8d6b3d5e2b3d5e');
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }
  , []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Grab corresponding weather icon
  let iconUrl
  const weatherCondition = weatherData.condition.toLowerCase();
  switch (weatherCondition) {
    case weatherCondition.includes('sun'):
      iconUrl = 'public/partial-clouds.jpg';
      break;
    case weatherCondition.includes('cloud'):
      iconUrl = 'public/partial-clouds.jpg';
      break;
    case weatherCondition.includes('rain'):
      iconUrl = 'public/partial-clouds.jpg';
      break;
    default:
      iconUrl = 'public/partial-clouds.jpg';
  }

  return (
    <div className="weather-icon">
      <img src={iconUrl} alt={weatherData.condition} />
      <p>{weatherData.temperature}°C</p>
    </div>
  );










}