import React from "react";
import "./IconParagraph.css";
import Icon from "./Icon";

function IconParagraph({ icon, children }) {
  return (
    <div className="icon-paragraph">
      <Icon icon={icon} />
      <p>{children}</p>
    </div>
  );
}

export default IconParagraph;
