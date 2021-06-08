import axios from "axios";
import React, { useState } from "react";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState(null);

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    setCity(event.target.value);
    let apiKey = "0959b7dd2ee575dc2ebb67ad205095e4";
    let units = "imperial";
    let apiUrl = `https://api.openweather.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="SearchEngine" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Type a city ... "
        onChange={updateCity}
        autocomplete="off"
        autoFocus="off"
      ></input>
      <input className="searchBtn" type="submit" value="Search"></input>
    </form>
  );

  if (!weather) {
    return <div className="SearchEngine">{form}</div>;
  } else {
    return (
      <div>
        <div className="SearchEngine">{form}</div>
        <ul>
          <strong className="temp">
            <li>{weather.city}</li>
          </strong>
          <li>
            Temperature: <strong>{weather.temperature}°F</strong>
          </li>
          <li>
            Description: <strong>{weather.description}</strong>
          </li>
          <li>
            Humidity: <strong>{weather.humidity}%</strong>
          </li>
          <li>
            Wind: <strong>{weather.wind}</strong>
          </li>
          <li>
            {" "}
            <img src={weather.icon} alt="weather-icon" />
          </li>
        </ul>
      </div>
    );
  }
}
