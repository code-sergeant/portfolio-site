import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Jumbotron from "./layout/Jumbotron";

function App() {
  return (
    <div className="App">
      <Jumbotron />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
