import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function Search() {
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
    </div>
  );
}
