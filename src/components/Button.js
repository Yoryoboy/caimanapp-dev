import "./Button.css";

function Button({ children, backgroundColor, color, onClick }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
  };
  return (
    <button className="btn" style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
