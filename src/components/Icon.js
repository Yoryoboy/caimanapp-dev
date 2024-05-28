import React from "react";
import "./Icon.css";

function Icon({ icon }) {
  return (
    <div className="icon-container">
      <i class={icon}></i>
    </div>
  );
}

export default Icon;
