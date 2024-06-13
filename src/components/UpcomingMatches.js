import React from "react";
import "./UpcomingMatches.css";
import MatchItem from "./MatchItem";

function UpcomingMatches({ buttons }) {
  return (
    <section className="upcoming-matches">
      <h2>Próximos partidos</h2>
      <MatchItem buttons={buttons} />
    </section>
  );
}

export default UpcomingMatches;
