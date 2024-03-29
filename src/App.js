import React from "react";
import "./App.css";
import Search from "./Search";
import Header from "./Header";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="Weather-container">
          <Header />
          <div className="Forecast-container">
            <Search />
            <Weather />
          </div>
        </div>
      </div>
      <footer>
        Open Source on{" "}
        <a href="https://github.com/abbiedesignco/react-weather">GitHub</a>,
        Coded by{" "}
        <a href="www.abbiericher.com" target="_blank">
          Abbie Richer
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
