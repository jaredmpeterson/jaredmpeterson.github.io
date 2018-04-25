import React from "react";
import "./Projects.css";

import Project from "./Project/Project";

const projects = props => (
  <article className="Projects">
    <h4>projects</h4>
    <Project
      title="Petey Inc. Notes"
      tags={["aws", "react", "sass"]}
      link="https://www.peteyinc.net"
    >
      PIN is a serveless app built on AWS.
    </Project>
    <Project
      title="Track Hymn"
      tags={["python", "pyramid", "self hosted"]}
      link="https://www.trackhymn.com"
      github="track_hymn"
    >
      Track Hymn is a data driven hobby project.
    </Project>
  </article>
);

export default projects;
