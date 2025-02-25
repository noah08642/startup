import React, {useState, useEffect} from 'react';



const WeatherIcon = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&&appid=bcd1410182de8f7597b309bf6ad37b10');
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
};

export default WeatherIcon;