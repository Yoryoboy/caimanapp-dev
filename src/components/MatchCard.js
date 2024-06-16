import React from "react";
import "./MatchCard.css";
import MatchItem from "./MatchItem";

function MatchCard({ title, buttons }) {
  return (
    <section className="upcoming-matches">
      <h2>{title}</h2>
      <MatchItem buttons={buttons} />
    </section>
  );
}

export default MatchCard;
