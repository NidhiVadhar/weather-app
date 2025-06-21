import React from 'react';
import { useSelector } from 'react-redux';

const WeatherSection = () => {
  const { data, loading, error } = useSelector(state => state.weather);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading weather data...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error.message || error}</p>;
  if (!data) return null;

  const date = new Date().toLocaleDateString();

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        {data.name}, {data.sys.country} — <span style={{ fontSize: '1rem' }}>{date}</span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem'
        }}
      >
        <div className="weather-card">
          <h4>🌡 Temperature</h4>
          <p>{data.main.temp} °C</p>
        </div>
        <div className="weather-card">
          <h4>🌤 Condition</h4>
          <p>{data.weather[0].description}</p>
        </div>
        <div className="weather-card">
          <h4>💧 Humidity</h4>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="weather-card">
          <h4>💨 Wind Speed</h4>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherSection;
