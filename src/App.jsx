import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import List from "./components/List";
import styles from "./styles/Home.module.css";
import WeatherDetails from "./pages/WeatherDetails";
import background from "./assets/background.jpg"; // Ensure this file exists

const App = () => {
  const cities = [
    { name: "New York", temp: 20 },
    { name: "London", temp: 15 },
    { name: "Mumbai", temp: 30 },
    { name: "Tokyo", temp: 25 },
    { name: "Sydney", temp: 22 },
  ];
  return (
    <Router>
    <div
      className={styles.home}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <div className={styles.content}>
      <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1 className={styles.title}>Welcome to Weather App</h1>
                  <Search />
                  <List cities={cities} />
                </>
              }
            />
            <Route path="/weather/:cityName" element={<WeatherDetails/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
