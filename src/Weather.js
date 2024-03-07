import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }

  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
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
  );
}
