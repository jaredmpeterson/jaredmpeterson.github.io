import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Logo />
          <h1>Jared M. Peterson</h1>
        </header>
        <p>Welcome!</p>
      </div>
    );
  }
}

export default App;
