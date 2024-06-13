import React from "react";
import IconParagraph from "./IconParagraph";
import Button from "./Button";
import "./MatchItem.css";

function MatchItem({ buttons }) {
  return (
    <div className="match-item">
      <div className="match-item-header">
        <h3>Jueves 19hs, Partido 5v5</h3>
        <IconParagraph icon="fi fi-rs-address-book">9/10</IconParagraph>
      </div>
      <div className="match-item-date">
        <IconParagraph icon="fi fi-rs-clock">19/12/2022</IconParagraph>
      </div>
      <div className="match-item-info">
        <IconParagraph icon="fi fi-rs-marker">
          Open Dorrego Atlanta
        </IconParagraph>
        <IconParagraph icon="fi fi-rs-user">Masculino</IconParagraph>
      </div>
      <div className="match-item-buttons">
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
