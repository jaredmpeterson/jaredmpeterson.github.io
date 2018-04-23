import React from "react";

import jmpLogo from "../../assets/images/jmp_logo.svg";
import "./Logo.css";

const logo = props => (
  <div className="Logo">
    <img src={jmpLogo} alt="JMP" />
  </div>
);

export default logo;
