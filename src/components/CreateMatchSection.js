import React from "react";
import Button from "../components/Button";
import "./CreateMatchSection.css";

export function CreateMatchSection() {
  return (
    <section className="create-match-section">
      <h3>Crea tu caimana</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Aliquet purus aenean.</p>
      <Button
        backgroundColor="linear-gradient(95.57deg, #DD8272 44.54%, #D8756E 60.7%)"
        width="100%"
        color="#FAFAFA"
      >
        Hazlo ahora!
      </Button>
    </section>
  );
}
