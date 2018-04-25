import React from "react";

import "./Quote.css";

const quote = props => {
  return (
    <div className="Quote">
      <p>{props.children}</p>
      <span>{props.author}</span>
    </div>
  );
};

export default quote;
