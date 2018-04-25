import React from "react";
import "./Skills.css";
import Skillset from "./Skillset/Skillset";

const skills = props => (
  <article className="Skills">
    <h4>skills</h4>
    <div className="Lists">
      <Skillset
        title="Core"
        skills={[
          "HTML5/CSS3",
          "Web Design",
          "LESS/SASS",
          "Adobe Illustrator/Sketch",
          "Google Analytics"
        ]}
      />
      <Skillset
        title="JavaScript"
        skills={["Angular", "React", "Express", "Node", "Gulp/Grunt"]}
      />
      <Skillset
        title="Python"
        skills={[
          "Pyramid",
          "Pandas",
          "Numpy",
          "Prophet",
          "TensorFlow",
          "Scikit-Learn"
        ]}
      />
      <Skillset
        title="Data"
        skills={[
          "PostgreSQL/MySQL",
          "MongoDB/NoSQL",
          "Excel/CSV",
          "Google Big Query",
          "PowerBI/Tableau"
        ]}
      />
    </div>
  </article>
);

export default skills;
