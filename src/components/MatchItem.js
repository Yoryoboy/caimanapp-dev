import React from "react";
import IconParagraph from "./IconParagraph";
import Button from "./Button";
import "./MatchItem.css";

function MatchItem() {
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
        <Button
          backgroundColor="#3C2E5A"
          width="100%"
          color="#FAFAFA"
          border="1px solid #D8756E"
        >
          Ver más
        </Button>
        <Button
          backgroundColor="linear-gradient(95.57deg, #DD8272 44.54%, #D8756E 60.7%)"
          width="100%"
          color="#FAFAFA"
        >
          Anotarme
        </Button>
      </div>
    </div>
  );
}

export default MatchItem;
