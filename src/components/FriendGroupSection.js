import React from "react";
import { Card } from "./Card";
import "./FriendGroupSection.css";

export function FriendGroupSection() {
  return (
    <section className="friend-group-section">
      <Card img="friends-section-bg.jpg" title="Amigos" />
      <Card img="group-section-bg.jpg" title="Grupos" />
    </section>
  );
}
