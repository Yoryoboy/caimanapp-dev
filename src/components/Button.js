import styles from "./Button.module.css";

function Button({
  children,
  backgroundColor,
  color,
  width = "auto",
  onClick,
  disabled,
  border = "none",
}) {
  const style = {
    background: backgroundColor,
    color: color,
    width: width,
    border: border,
  };
  return (
    <button
      className={styles.btn}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
