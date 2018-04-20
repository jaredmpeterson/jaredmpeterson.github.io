import React, { Component } from "react";
import logo from "./jmp_logo.svg";
import "./App.css";

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
              <p>
                I am a web developer. I published my first website online using
                iWeb on my white 12" iBook G4 in 2006. I love design and
                development and have been able to make a career out of it even
                if it took me some time to figure out this is what I wanted to
                do.
              </p>
              <div className="Quote">
                <p>
                  Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work. And the only way to do great work is to love what
                  you do. If you haven't found it yet, keep looking. Don't
                  settle. As with all matters of the heart, you'll know when you
                  find it.
                </p>
                <span>Steve Jobs</span>
              </div>
              <p>
                I like playing card and board games, running, playing softball
                on Thursday nights, playing basketball whenever possible, and
                traveling with my wife. We are looking forward to the birth of
                our first child due March 21st 2018.
              </p>
              <p>
                <a href="mailto:jared@peteyinc.com">Email</a> /{" "}
                <a
                  href="https://www.linkedin.com/in/thejaredpeterson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </article>
          <article id="recognition">
            <h4>const me =</h4>
            <div id="recognition-lists" className="cf">
              <ul>
                <li data-cnt="01">Core</li>
                <li>— Design</li>
                <li>— HTML5/CSS3</li>
                <li>— JavaScript/ES6</li>
                <li>— Python 3</li>
                <li>— Data</li>
              </ul>
              <ul>
                <li data-cnt="02">
                  JavaScript <sup>ES6</sup>
                </li>
                <li>— Angular</li>
                <li>— React</li>
                <li>— Express</li>
                <li>— Node.js</li>
                <li>— Gulp/Grunt</li>
              </ul>
              <ul>
                <li data-cnt="03">
                  Python <sup>3</sup>
                </li>
                <li>— Pandas</li>
                <li>— Numpy</li>
                <li>— Prophet</li>
                <li>— TensorFlow</li>
                <li>— Scikit-Learn</li>
              </ul>
              <ul>
                <li data-cnt="04">Data</li>
                <li>— PostgreSQL/MySQL</li>
                <li>— MongoDB/NoSQL</li>
                <li>— Excel/CSV</li>
                <li>— Google Big Query</li>
                <li>— PowerBI/Tableau</li>
              </ul>
              <ul>
                <li data-cnt="05">Projects</li>
                <li>
                  —{" "}
                  <a
                    href="https://www.trackhymn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Track Hymn
                  </a>
                </li>
                <li>
                  —{" "}
                  <a
                    href="https://www.peteyinc.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Petey Inc. Notes (PIN)
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default App;
