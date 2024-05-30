import React from "react";
import Icon from "./Icon";
import "./RecentActivitiesItem.css";

function RecentActivitiesItem({ icon, color, children }) {
  return (
    <div className="recent-activities-item">
      <Icon icon={icon} color={color} size="16px" />
      <p>{children}</p>
    </div>
  );
}

export default RecentActivitiesItem;
