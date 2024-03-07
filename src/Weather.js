import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }

  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Lisbon&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return <p>Here is the current weather in:</p>;
}
