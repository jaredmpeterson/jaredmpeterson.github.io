import React, { Component } from "react";
import "./App.css";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <About />
      </div>
    );
  }
}

export default App;
