import React from "react";
import IconParagraph from "./IconParagraph";
import Button from "./Button";

import styles from "./MatchItem.module.css";

function MatchItem({ buttons }) {
  return (
    <div className={styles.matchItem}>
      <div className={styles.matchItemHeader}>
        <h3>Jueves 19hs, Partido 5v5</h3>
        <IconParagraph icon="fi fi-rs-address-book">9/10</IconParagraph>
      </div>
      <div className={styles.matchItemDate}>
        <IconParagraph icon="fi fi-rs-clock">19/12/2022</IconParagraph>
      </div>
      <div className={styles.matchItemInfo}>
        <IconParagraph icon="fi fi-rs-marker">
          Open Dorrego Atlanta
        </IconParagraph>
        <IconParagraph icon="fi fi-rs-user">Masculino</IconParagraph>
      </div>
      <div className={styles.matchItemButtons}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            backgroundColor={button.backgroundColor}
            width={button.width}
            color={button.color}
            border={button.border}
            onClick={button.onClick}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default MatchItem;
