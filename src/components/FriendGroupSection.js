import React from "react";
import Card from "./Card";

import styles from "./FriendGroupSection.module.css";

function FriendGroupSection() {
  return (
    <section className={styles.friendGroupSection}>
      <Card img="friends-section-bg.jpg" title="Amigos" />
      <Card img="group-section-bg.jpg" title="Grupos" />
    </section>
  );
}

export default FriendGroupSection;
