import React from 'react';

const WeatherWidget = ({ weatherData }) => {
  if (!weatherData) {
    return null; // Don't render if weatherData is not available yet
  }

  const { weather, main, name } = weatherData;
  const weatherIconCode = weather[0].icon;
  const weatherIconUrl = `https://openweathermap.org/img/w/${weatherIconCode}.png`;

  // Convert temperature from Kelvin to Celsius
  const temperatureCelsius = (main.temp - 273.15).toFixed(1);

  return (
    <div className="weather-card">
      <div className="weather-widget">
        <div className="weather-icon">
          <img src={weatherIconUrl} alt="Weather Icon" />
        </div>
        <div className="weather-info">
          <div className="weather-description">{weather[0].description}</div>
          <div className="weather-temperature">{temperatureCelsius}°C</div>
          <div className="weather-location">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
