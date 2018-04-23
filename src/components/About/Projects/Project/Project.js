import React from "react";
import "./Project.css";

const project = props => {
  let tags = props.tags ? props.tags.map(tag => <li>{tag}</li>) : <li>None</li>;

  console.log(tags);
  return (
    <div className="Project">
      <div className="Info">
        <h3>{props.title}</h3>
        <p>{props.children}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Visit Project
        </a>
        <div className="Tags">
          <h5>Tags:</h5>
          <ul>{tags}</ul>
        </div>
      </div>
      <div className="Preview">placeholder</div>
    </div>
  );
};

export default project;
