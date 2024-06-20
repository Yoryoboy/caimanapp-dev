import React from "react";

import styles from "./PhoneContainer.module.css";

function PhoneContainer({ children }) {
  return <div className={styles.phoneContainer}>{children}</div>;
}

export default PhoneContainer;
