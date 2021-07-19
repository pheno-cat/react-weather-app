import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Monday 05:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather mt-4">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Type a city ... "
                autoFocus="on"
              ></input>
            </div>
            <div className="col-3">
              <button
                className="btn btn-primary btn-md mb-3 w-100"
                type="submit"
                value="Search"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.iconUrl} alt={weatherData.description} />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°F | °C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0959b7dd2ee575dc2ebb67ad205095e4";
    const units = "imperial";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading ... ";
  }
}
