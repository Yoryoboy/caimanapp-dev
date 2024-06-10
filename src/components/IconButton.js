import React from "react";
import "./IconButton.css";

function IconButton({ iconClass, iconColor, backgroundColor }) {
  const containerStyle = {
    color: iconColor,
    backgroundColor: backgroundColor,
    borderRadius: "12px",
    width: "44px",
    height: "44px",
  };

  const iconStyle = {
    fontSize: "24px",
    lineHeight: "44px",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  return (
    <div className="icon-button-container" style={containerStyle}>
      <i className={iconClass} style={iconStyle}></i>
      <div></div>
    </div>
  );
}

export default IconButton;
