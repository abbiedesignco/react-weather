import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Weather() {
  return (
    <div>
      <div class="search-bar row">
        <form class="col-9">
          <input
            class="form-input"
            type="text"
            placeholder="Tap a city here..."
            autocomplete="off"
            value=""
          />
          <input type="submit" class="btn btn-primary" value="Search" />
        </form>
        <button class="col-3 btn btn-success">Current</button>
      </div>
      <div class="weather-summary">
        <div class="weather-summary-header">
          <h2>Lisbon</h2>
          <div class="row weather-details">
            <div class="col-6">
              <div class="weather-detail-text">Thursday 13:58</div>
              <div class="weather-detail-text">Clouds</div>
              <div class="weather-detail-text">Precipitation: 73%</div>
              <div class="weather-detail-text">Wind: 13km/h</div>
            </div>
            <div class="weather-temp col-6">
              <strong>11</strong>°C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
