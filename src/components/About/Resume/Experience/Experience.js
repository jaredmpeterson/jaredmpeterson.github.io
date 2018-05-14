import React from "react";
import "./Experience.css";

const experience = props => {
  let tech = props.technologies ? (
    props.technologies.map(tech => <li key={tech}>{tech}</li>)
  ) : (
    <li>None</li>
  );

  let technologies = props.technologies ? (
    <div className="Technologies">
      <h5>Technologies:</h5>
      <ul>{tech}</ul>
    </div>
  ) : null;

  return (
    <div className="Experience">
      <div className="Info">
        <h3>
          {props.title} @ {props.company}
        </h3>
        <span>
          {props.start}-{props.end}
        </span>
        <p>{props.children}</p>
        {technologies}
      </div>
    </div>
  );
};

export default experience;
