import React from "react";
import "./Card.css";

function Card({ img, title }) {
  return (
    <div className="card">
      <img src={img} alt="placeholder" />
      <h4>{title}</h4>
    </div>
  );
}

export default Card;
