import React from "react";

import "./Contact.css";

const contact = props => {
  return (
    <article className="Contact">
      <h4>contact</h4>
      <p>
        <a href="mailto:jared@peteyinc.com">Email</a> /{" "}
        <a
          href="https://www.linkedin.com/in/thejaredpeterson"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </article>
  );
};

export default contact;
