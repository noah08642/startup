import React, {useState, useEffect} from 'react';
import './weather.css';


const WeatherIcon = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [coords, setCoords] = useState({ latitude: null, longitude: null });










// Get latitude and longitude using the Geolocation API
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}, []);









  // Fetch weather data from OpenWeather using the obtained coordinates
  useEffect(() => {
    if (coords.latitude && coords.longitude) {
      const API_KEY = "c2e6a221deac27a7531df295d9cefa71";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`;
      
      fetch(url)
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [coords]);





  if (!coords.latitude || !coords.longitude) {
    return <div className="fetch">Fetching location...</div>;
  }

  if (!weatherData) {
    return <div className="fetch">Fetching weather data...</div>;
  }






  // Grab corresponding weather icon
  let iconUrl
  const weatherCondition = weatherData.weather[0].main.toLowerCase();
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
      <img width="120px" src={iconUrl} alt={weatherData.condition} />
      {/* <p>{weatherData.temperature}°C</p> */}
    </div>
  );
};

export default WeatherIcon;