import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import WeatherSection from './components/WeatherSection';
import ForecastChart from './components/foreCastChart';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Search />

      <div className="split-screen">
        <div className="left-panel">
          <ForecastChart />
        </div>
        <div className="right-panel">
          <WeatherSection />
        </div>
      </div>
    </div>
  );
};

export default App;
