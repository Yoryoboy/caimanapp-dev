import React from "react";
import styles from "./IconButton.module.css";

function IconButton({
  iconClass,
  iconColor,
  backgroundColor,
  position = "relative",
}) {
  const containerStyle = {
    color: iconColor,
    backgroundColor: backgroundColor,
    borderRadius: "12px",
    width: "44px",
    height: "44px",
    position: position,
    right: "0",
  };

  const iconStyle = {
    fontSize: "24px",
    lineHeight: "44px",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  return (
    <div className={styles.iconButtonContainer} style={containerStyle}>
      <i className={iconClass} style={iconStyle}></i>
      <div></div>
    </div>
  );
}

export default IconButton;
