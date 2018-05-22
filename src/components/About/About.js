import React from "react";
import "./About.css";
import Me from "./Me/Me";
import Skills from "./Skills/Skills";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
// import Contact from "./Contact/Contact";

const about = props => (
  <div className="About">
    <Me />
    {/* <Contact /> */}
    <Skills />
    <Projects />
    <Resume />
  </div>
);

export default about;
