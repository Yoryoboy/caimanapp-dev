import React from "react";

import styles from "./Card.module.css";

function Card({ img, title }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="placeholder" />
      <h4>{title}</h4>
    </div>
  );
}

export default Card;
