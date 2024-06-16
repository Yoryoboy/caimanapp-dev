import React from "react";

import styles from "./Icon.module.css";

function Icon({ icon, color = "white", size = "12px" }) {
  const style = {
    fontSize: size,
    color: color,
    lineHeight: 1,
    verticalAlign: "middle",
    display: "inline-block",
  };

  return <i className={`fi ${icon} ${styles.icon}`} style={style}></i>;
}

export default Icon;
