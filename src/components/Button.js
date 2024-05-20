import "./Button.css";

function Button({ children, backgroundColor, color, onClick, disabled }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
  };
  return (
    <button className="btn" style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
