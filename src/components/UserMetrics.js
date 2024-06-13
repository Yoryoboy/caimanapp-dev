import MetricItem from "./MetricItem";

import styles from "./UserMetrics.module.css";

function UserMetrics() {
  return (
    <section className={styles.metricsSection}>
      <MetricItem title="Jugadores" value="02" />
      <MetricItem title="Amigos" value="07" />
    </section>
  );
}

export default UserMetrics;
