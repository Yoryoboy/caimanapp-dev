import "./Button.css";

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
    <button className="btn" style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
