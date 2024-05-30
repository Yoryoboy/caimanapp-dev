import React from "react";
import "./Icon.css";

function Icon({ icon, color = "white", fontSize = "12px" }) {
  const style = {
    color: color,
    fontSize: fontSize,
  };

  return (
    <div className="icon-container">
      <i className={icon} style={style}></i>
    </div>
  );
}

export default Icon;
