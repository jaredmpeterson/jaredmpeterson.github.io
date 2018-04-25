import React from "react";
import "./Skills.css";

const skills = props => (
  <article className="Skills">
    <h4>skills</h4>
    <div className="Lists">
      <ul>
        <li data-cnt="01">Core</li>
        <li>— HTML5/CSS3</li>
        <li>— Web Design</li>
        <li>— LESS/SASS</li>
        <li>— Adobe Illustrator/Sketch</li>
        <li>— Google Analytics</li>
      </ul>
      <ul>
        <li data-cnt="02">JavaScript</li>
        <li>— Angular</li>
        <li>— React</li>
        <li>— Express</li>
        <li>— Node.js</li>
        <li>— Gulp/Grunt</li>
      </ul>
      <ul>
        <li data-cnt="03">Python</li>
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
    </div>
  </article>
);

export default skills;
