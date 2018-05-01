import React from "react";
import "./Experience.css";

const experience = props => {
  return (
    <div className="Experience">
      <div className="Info">
        <h3>
          {props.title} @ {props.company}
        </h3>
        <span>
          {props.start} - {props.end}
        </span>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default experience;
