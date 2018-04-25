import React from "react";
import "./Skillset.css";

const skillset = props => {
  let skills = props.skills ? (
    props.skills.map(skill => <li key={skill}>— {skill}</li>)
  ) : (
    <li>None</li>
  );
  return (
    <div className="Skillset">
      <h3 className="SkillTitle">{props.title}</h3>
      <ul>{skills}</ul>
    </div>
  );
};

export default skillset;
