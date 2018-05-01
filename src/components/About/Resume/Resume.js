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
    <Experience
      title="Senior Marketing Manager"
      company="InfinIT Consulting"
      start="2014"
      end="2016"
    >
      Redesigned website UI/UX increasing lead conversion 80%. Implemented
      development best practices including git, live/staging/dev environments.
      Directed complete company rebrand, designed new identity including logo,
      website and print materials.
    </Experience>
    <Experience
      title="Marketing Manager"
      company="Fenton Companies"
      start="2009"
      end="2013"
    >
      Design and develop websites for portfolio companies using HTML, CSS,
      JavaScript, and jQuery. Responsible for technology related projects for
      each portfolio company’s strategic business and organizational objectives.
      Define and initiate projects, manage costs, scheduling and performance of
      project components, while working to ensure project success.
    </Experience>
    {/* <Experience title="" company="" start="" end="">
        Empty
      </Experience> */}
  </article>
);

export default resume;
