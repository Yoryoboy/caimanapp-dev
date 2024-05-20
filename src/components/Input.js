import { useState } from "react";
import "./Input.css";

function Input({ type, label, value, icon, onChange, children, error }) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div
        className={`input-container ${error ? "error" : ""} ${
          !error && value ? "valid" : ""
        }`}
      >
        <i className={`${icon} ${value ? "hidden" : ""}`}></i>
        <input
          type={showPassword && label === "password" ? "text" : type}
          label={label}
          placeholder={children}
          value={value}
          onChange={onChange}
        />
        {label === "password" && (
          <i
            className={`${
              showPassword ? "fi fi-rs-eye" : "fi fi-rs-crossed-eye"
            } ${value ? "" : "hidden"}`}
            onClick={togglePasswordVisibility}
          ></i>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default Input;
