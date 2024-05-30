import React from "react";
import "./RecentActivitiesFeed.css";
import RecentActivitiesItem from "./RecentActivitiesItem";

function RecentActivitiesFeed() {
  return (
    <div className="recent-activties-feed">
      <RecentActivitiesItem icon="fi-rs-comment-info" color="#FFCC00">
        <strong>YoryoToure</strong> se ha bajado de la caimana para la partida
        de <strong>Jueves 7pm, Partido 5v5</strong>
      </RecentActivitiesItem>
      <RecentActivitiesItem icon="fi-rs-comment-heart" color="#06C270">
        <strong>AlePlgr</strong> se ha unido a la caimana para la partida de
        <strong>Jueves 7pm, Partido 5v5</strong>
      </RecentActivitiesItem>
      <RecentActivitiesItem icon="fi-rs-comment-heart" color="#06C270">
        <strong>Jofre</strong> se ha unido a la caimana para la partida de
        <strong>Jueves 7pm, Partido 5v5</strong>
      </RecentActivitiesItem>
    </div>
  );
}

export default RecentActivitiesFeed;
