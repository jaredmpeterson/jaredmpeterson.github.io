import React from "react";
import "./Project.css";

const project = props => {
  let tags = props.tags ? (
    props.tags.map(tag => <li key={tag}>{tag}</li>)
  ) : (
    <li>None</li>
  );

  let github = props.github ? (
    <a
      href={"https://github.com/jaredmpeterson/" + props.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Code
    </a>
  ) : null;

  return (
    <div className="Project">
      <div className="Info">
        <h3>{props.title}</h3>
        <p>{props.children}</p>
        <div className="btn-wrap">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
          {github}
        </div>
        <div className="Tags">
          <h5>Tags:</h5>
          <ul>{tags}</ul>
        </div>
      </div>
      <div className="Preview">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default project;
