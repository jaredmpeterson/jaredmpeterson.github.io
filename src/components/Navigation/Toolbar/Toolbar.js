import React from "react";
import Logo from "../../Logo/Logo";
import "./Toolbar.css";

const toolbar = props => (
  <header className="Toolbar">
    <Logo />
    <nav className="Nav">
      <a href="#skills">skills</a>
      <a href="#projects">projects</a>
      <a href="#resume">resume</a>
    </nav>
  </header>
);

export default toolbar;
