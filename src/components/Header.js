import React from "react";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <Link to="/userpage" className="link-wrapper">
          <div>
            <img className={styles.userPic} src="user-pic.jpg" alt="logo" />
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
