import React from "react";
import RecentActivitiesFeed from "./RecentActivitiesFeed";

import styles from "./RecentActivities.module.css";

function RecentActivities() {
  return (
    <section className={styles.recentActivitiesSection}>
      <h2>Actividades recientes</h2>
      <RecentActivitiesFeed />
    </section>
  );
}

export default RecentActivities;
