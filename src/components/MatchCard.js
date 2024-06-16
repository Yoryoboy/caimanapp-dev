import React from "react";
import MatchItem from "./MatchItem";

import styles from "./MatchCard.module.css";

function MatchCard({ title, buttons }) {
  return (
    <section className={styles.upcomingMatches}>
      <h2>{title}</h2>
      <MatchItem buttons={buttons} />
    </section>
  );
}

export default MatchCard;
