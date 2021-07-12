import React from "react";

import "./Weather.css";
export default function Weather() {
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
      
         
            <h1>Dallas, TX</h1>
              <ul>
         
          <li>Thursday 5:00 PM</li>
          <li>Mostly Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
                <img
                  src="
              https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="mostly sunny"
                  
                />
              
              
                <span className="temperature">91</span>
                <span className="units">°F | °C</span>
             
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 1%</li>
              <li>Humidity: 55%</li>
              <li>Wind: 12 mph</li>
            </ul>
          </div>
        </div>
      </div>
    
  );
}
