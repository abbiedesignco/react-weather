import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }

  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather-summary">
      <Container className="Weather-summary-header">
        <h2>Lisbon</h2>
        <Row className="Weather-details">
          <Col className="Col-6">
            <div className="Weather-detail-text">Thursday 13:58</div>
            <div className="Weather-detail-text">Clouds</div>
            <div className="Weather-detail-text">Precipitation: 73%</div>
            <div className="Weather-detail-text">Wind: 13km/h</div>
          </Col>
          <Col className="Weather-temp Col-6">
            <strong>11</strong>°C
          </Col>
        </Row>
      </Container>
    </div>
  );
}
