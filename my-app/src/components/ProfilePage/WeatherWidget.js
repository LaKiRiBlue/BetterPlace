// WeatherWidget.js
import React from 'react';
import './WeatherWidget.css';

const WeatherWidget = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { main, weather, name } = weatherData;
  const temperature = Math.round(main.temp - 273.15); // Convert temperature from Kelvin to Celsius
  const weatherDescription = weather[0].description;
  const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="weather-card">
      <div className="weather-location">{name}</div>
      <div className="weather-temperature">{temperature}°C</div>
      <div className="weather-description">{weatherDescription}</div>
      <div className="weather-date">
        {dayOfWeek}, {formattedDate}
      </div>
    </div>
  );
};

export default WeatherWidget;
