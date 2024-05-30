import React from "react";
import "./UpcomingMatches.css";
import MatchItem from "./MatchItem";

function UpcomingMatches() {
  return (
    <section className="upcoming-matches">
      <h2>Próximos partidos</h2>
      <MatchItem />
    </section>
  );
}

export default UpcomingMatches;
