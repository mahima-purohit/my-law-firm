import React from "react";
import styles from "./Footer.module.css";
import socialMediIcon from "../../assets/teamImages/socialMediaIcon.png";
import logoImage from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerContainer1}>
        <img src={logoImage} alt="logoImage" />
      </div>
      <div className={styles.footerContainer2}>
        <div className={styles.container2inner1}>
          <p className={styles.footerText1}>Home</p>
          <p className={styles.footerText1}>Attorneys</p>
          <p className={styles.footerText1}>Practice Areas</p>
          <p className={styles.footerText1}>About Us</p>
          <img
            src={socialMediIcon}
            alt="socialMediaIcons"
            className={styles.socialMediaIcon}
          ></img>
        </div>
        <div className={styles.container2inner2}>
          <p className={styles.footerText2}>2000 acme All Rights reserved</p>
          <p className={styles.footerText2}>Privacy Policy</p>
          <p className={styles.footerText2}>Terms Of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
