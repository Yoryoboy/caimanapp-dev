import React from "react";
import Icon from "./Icon";

import styles from "./RecentActivitiesItem.module.css";

function RecentActivitiesItem({ icon, color, children }) {
  return (
    <div className={styles.recentActivitiesItem}>
      <Icon icon={icon} color={color} size="16px" />
      <p>{children}</p>
    </div>
  );
}

export default RecentActivitiesItem;
