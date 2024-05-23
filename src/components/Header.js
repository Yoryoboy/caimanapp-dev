import React from "react";
import "./Header.css";
import IconButton from "./IconButton";

function Header() {
  return (
    <header>
      <div className="user-info">
        <div>
          <img src="user-pic.jpg" alt="logo" />
        </div>
        <div>
          <p>
            Bievenido,
            <br />
            <strong> Jose Domingo</strong>
          </p>
        </div>
      </div>
      <IconButton
        iconClass="fi fi-ss-menu-burger"
        iconColor="#FAFAFA"
        backgroundColor="#161024"
      />
    </header>
  );
}

export default Header;
