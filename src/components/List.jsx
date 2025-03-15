import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/List.module.css";

const List = ({ cities }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.heading}>Weather in Popular Cities</h2>
      <ul className={styles.cityList}>
        {cities.map((city, index) => (
          <li
            key={index}
            className={styles.cityItem}
            onClick={() => navigate(`/weather/${city.name}`)}
          >
            <span className={styles.cityName}>{city.name}</span>
            <span className={styles.temp}>{city.temp}°C</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
