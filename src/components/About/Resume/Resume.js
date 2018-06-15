import React from 'react';
import './Resume.css';
import Experience from './Experience/Experience';

const resume = props => (
  <article className="Resume">
    <h4 id="resume">resume</h4>
    <Experience
      title="Software Engineer/Data Analyst"
      company="Monumetric"
      start="2016"
      end="10/2017"
      technologies={[
        'Python',
        'PostgreSQL',
        'MongoDB',
        'Django',
        'JavaScript',
        'Google Cloud Platform'
      ]}>
      Developed full-stack apps using Python, PostgreSQL, MongoDB to extract,
      transform, and load (ETL) GBs of daily data from multiple internal and
      external sources.
      <br />
      <br />
      Designed front-end dashboards to deliver daily insight and analysis of key
      business metrics in built using custom JavaScript, HTML/CSS, enterprise
      dashboard tools and open source projects.
      <br />
      <br />
      Forecast client and company performance using Pandas, NumPy, TensorFlow,
      Scikit-Learn, Prophet and other Machine Learning tools.
      <br />
      <br />
      Documented, tested, and reviewed code.
    </Experience>
    <Experience
      title="Junior Developer"
      company="DevMountain"
      start="5/2016"
      end="8/2016"
      technologies={[
        'MongoDB',
        'Express',
        'Angular',
        'Node',
        'CSS3/LESS/SASS'
      ]}>
      ...
    </Experience>
    <Experience
      title="Senior Marketing Manager"
      company="INFINIT Consulting"
      start="2014"
      end="2016"
      technologies={[
        'JavaScript',
        'HTML5/CSS3',
        'Python',
        'Excel',
        'SQL',
        'Google Analytics'
      ]}>
      Redesigned website UI/UX increasing lead conversion 80%. Implemented
      development best practices including git, live/staging/dev environments.
      Directed complete company rebrand, designed new identity including logo,
      website and print materials.
    </Experience>
    <Experience
      title="Web Developer & Marketing Manager"
      company="Fenton Companies"
      start="2009"
      end="2013">
      Design, develop, and deploy websites for each portfolio company using
      HTML, CSS, JavaScript, and jQuery. Responsible for technology related
      projects for each portfolio company’s strategic business and
      organizational objectives. Define and initiate projects, manage costs,
      scheduling and performance of project components, while working to ensure
      project success.
    </Experience>
    {/* <Experience title="" company="" start="" end="">
        Empty
      </Experience> */}
  </article>
);

export default resume;
