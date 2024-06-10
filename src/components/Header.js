import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import IconButton from "./IconButton";

function Header() {
  return (
    <header>
      <div className="user-info">
        <Link to="/userpage" className="link-wrapper">
          <div>
            <img className="user-pic" src="user-pic.jpg" alt="logo" />
          </div>
        </Link>
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
