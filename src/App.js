import React, { Component } from 'react';
import logo from './jmp_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <img src={logo} className="Logo" alt="jmp_logo" />
          <h2 className="Title">jaredmpeterson.github.io</h2>
        </header>
        <div className="About">
          <article className="Bio">
            <h4>jmp</h4>
            <h1>Hello.</h1>
            <div id="bio-copy">
              <p>My name is Jared.</p>
              <p>I created my first website using iWeb on my 12" iBook in 2005. I love web design and development and have been able to make a career out of it.</p>
              <p>I like to play basketball whenever possible, run, play softball on Thursday nights, and travel with my wife and am looking forward to the birth of our first child due March 2018.</p>
              <p><a href="mailto:developer@peteyinc.com">Email</a> / <a href="https://www.linkedin.com/in/thejaredpeterson" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
          </article>
          <article id="recognition">
            <h4>const me</h4>
            <div id="recognition-lists" className="cf">
              <ul>
                <li data-cnt="01">Core</li>
                <li>—Design</li>
                <li>—HTML5/CSS3</li>
                <li>—JavaScript/ES6</li>
                <li>—Python 3</li>
                <li>—Data</li>
              </ul>
              <ul>
                <li data-cnt="02">JavaScript <sup>ES6</sup></li>
                <li>—Angular</li>
                <li>—React</li>
                <li>—Express</li>
                <li>—Node.js</li>
                <li>-Gulp/Grunt</li>
              </ul>
              <ul>
                <li data-cnt="03">Python <sup>3</sup></li>
                <li>—Pandas</li>
                <li>—Numpy</li>
                <li>—Prophet</li>
                <li>—TensorFlow</li>
                <li>—Scikit-Learn</li>
              </ul>
              <ul>
                <li data-cnt="04">Data</li>
                <li>—PostgreSQL/MySQL</li>
                <li>—MongoDB/NoSQL</li>
                <li>—Excel/CSV</li>
                <li>—Google Big Query</li>
                <li>—PowerBI/Tableau</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default App;
