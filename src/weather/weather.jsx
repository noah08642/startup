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
    }
  })









}