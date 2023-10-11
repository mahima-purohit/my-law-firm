import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <img src={logo} alt="logoImage" />
      <div className={styles.navMenu}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div>
        <button className={styles.contactButton}>Contact Now</button>
      </div>
    </div>
  );
};

export default NavBar;
