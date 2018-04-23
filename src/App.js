import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="logo" />
          <h1>Jared M. Peterson</h1>
        </header>
        <p>Welcome!</p>
      </div>
    );
  }
}

export default App;
