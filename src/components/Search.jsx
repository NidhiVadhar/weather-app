import React, {useState} from "react";
import styles from "../styles/Search.module.css";
const Search = () => {
    const [city, setCity] = useState("");

    const handleSearch = (e) => {
        alert(`Searching for weather in ${city}`);
    };
    return (
        <div className = {styles.search}>
            <input type= "text"
            placeholder="Enter city name"
            value={city}
            className = {styles.input}
            onChange = {(e) => setCity(e.target.value)}
            ></input>
            <button className = {styles.button} onClick={handleSearch}> 🔍 Search</button>
        </div>
    );
};
export default Search;