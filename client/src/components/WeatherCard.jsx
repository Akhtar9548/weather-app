import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <img src={weather.icon} alt={weather.condition} />
      <p>Condition: {weather.condition}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
