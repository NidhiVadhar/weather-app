import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/WeatherDetails.module.css";

const WeatherDetails = () => {
  const { cityName } = useParams();

  return (
    <div className={styles.detailsContainer}>
      <h2>Weather Details for {cityName}</h2>
      <p>🌡️ Temperature: 22°C</p>
      <p>💨 Wind Speed: 10 km/h</p>
      <p>🌧️ Precipitation: 30%</p>
      <p>💧 Humidity: 65%</p>
    </div>
  );
};

export default WeatherDetails;
