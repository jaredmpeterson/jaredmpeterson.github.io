import React from 'react';
import './Projects.css';

import Project from './Project/Project';

import PIN from '../../../assets/images/peteyincnotes.png';
import HMC from '../../../assets/images/hmcole.png';
import TH from '../../../assets/images/trackhymn.png';

const projects = props => (
  <article className="Projects">
    <h4 id="projects">projects</h4>
    <Project
      title="Petey Inc. Notes"
      tags={['aws', 'react', 'sass', 'react-bootstrap', 'serverless']}
      link="https://www.peteyinc.net"
      image={PIN}
      github="notes-api">
      Petey Inc. Notes (PIN) is a Serverless React App using AWS: Lambda,
      DynamoDB, Cognito, S3, and CloudFront.
    </Project>
    {/* <Project
      title="Track Hymn"
      tags={['python', 'pyramid', 'self-hosted', 'bower', 'ansible']}
      link="https://www.trackhymn.com"
      github="track_hymn"
      image={TH}>
      Track Hymn is a data driven hobby project.
    </Project> */}
    <Project
      title="H.M. Cole"
      tags={['design', 'javascript', 'css', 'logo', 'branding']}
      link="https://www.hmcole.com"
      image={HMC}>
      Branding and website redesign. Website development for custom clothier
      H.M. Cole.
    </Project>
    <Project
      title="My Custom Clothier"
      tags={['design', 'javascript', 'css', 'angular', 'django']}
      link="https://mycustomclothier.com/hmcole"
      image={HMC}>
      Contractor on existing app, contributed to design, Angular frontend, and
      Django backend.
    </Project>
  </article>
);

export default projects;
