import React from 'react';
import { useSelector } from 'react-redux';

const WeatherCard = () => {
  const { data, loading, error } = useSelector(state => state.weather);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || error}</p>;
  if (!data) return <p>Search for a city to get weather info.</p>;

  return (
    <div>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Condition: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
