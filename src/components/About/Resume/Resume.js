import React from "react";
import "./Resume.css";
import Experience from "./Experience/Experience";

const resume = props => (
  <article className="Resume">
    <h4 id="resume">resume</h4>
    <Experience title="Developer" company="Monumetric" start="2016" end="2017">
      Developed automated BI solutions using Python 3, PostgreSQL, MongoDB,
      Jupyter, and Google BigQuery to aggregate GBs of data from multiple
      sources. Design and display daily insight and analysis of key business
      metrics using web-based enterpirse dashboard tools and reports. Forecast
      client and company performance using TensorFlow, Scikit-Learn and other ML
      libraries.
    </Experience>
  </article>
);

export default resume;
