import React from "react";
import "./RecentActivities.css";
import RecentActivitiesFeed from "./RecentActivitiesFeed";

export function RecentActivities() {
  return (
    <section className="recent-activities-section">
      <h2>Actividades recientes</h2>
      <RecentActivitiesFeed />
    </section>
  );
}