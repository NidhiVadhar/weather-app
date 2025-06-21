import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchWeatherByCityName,
  fetchForecast,
} from '../features/weather/weatherSlice';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim() !== '') {
      dispatch(fetchWeatherByCityName(query));
      dispatch(fetchForecast(query));
      setQuery('');
    }
  };

  const handleGeoSearch = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      dispatch(fetchWeatherByCoords({ lat: latitude, lon: longitude }));
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <input
        style={{
          width: '300px',
          padding: '10px',
          fontSize: '1.2rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
        placeholder="Search any city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: '1rem',
          padding: '10px 20px',
          fontSize: '1.1rem',
          borderRadius: '8px',
          backgroundColor: '#1e90ff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Search
      </button>

      <br />
      <button
        onClick={handleGeoSearch}
        style={{
          marginTop: '1rem',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '8px',
          backgroundColor: '#32cd32',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        📍 Use My Location
      </button>
    </div>
  );
};

export default Search;
