import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Search() {
  return (
    <Container>
      <Row className="Search-bar">
        <Col xs={9} className="Col-9">
          <form>
            <input
              className="Form-input"
              type="text"
              placeholder="Type a city here..."
              autocomplete="off"
              value=""
            />
            <input type="submit" className="Btn Btn-search" value="Search" />
          </form>
        </Col>
        <Col xs={3} className="Col-3">
          <button className="Btn Btn-current">Current</button>
        </Col>
      </Row>
    </Container>
  );
}
