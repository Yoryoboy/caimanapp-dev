import React from "react";
import "./Icon.css";

function Icon({ icon, color = "white", size = "12px" }) {
  const styles = {
    fontSize: size,
    color: color,
    lineHeight: 1,
    verticalAlign: "middle",
    display: "inline-block",
  };

  return <i className={`fi ${icon}`} style={styles}></i>;
}

export default Icon;
