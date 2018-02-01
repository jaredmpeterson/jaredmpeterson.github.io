import React, { Component } from 'react';
import logo from './jmp_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="jmp_logo" />
          <h2 className="App-title">jaredmpeterson.github.io</h2>
        </header>
        <p className="App-intro">
          Welcome to my github
        </p>
      </div>
    );
  }
}

export default App;
