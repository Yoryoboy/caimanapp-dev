import styles from "./MetricItem.module.css";

function MetricItem({ title, value }) {
  return (
    <div className={styles.metrics}>
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

export default MetricItem;
