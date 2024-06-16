import React from "react";
import Icon from "./Icon";

import styles from "./IconParagraph.module.css";

function IconParagraph({ icon, children }) {
  return (
    <div className={styles.iconParagraph}>
      <Icon icon={icon} />
      <p>{children}</p>
    </div>
  );
}

export default IconParagraph;
