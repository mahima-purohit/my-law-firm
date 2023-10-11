import React from "react";
import mailIcon from "../../assets/mailIcon.png";
import heroImage from "../../assets/Group 10591.png";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTexts}>
        <h1 id={styles.heading1}>You don't have to</h1>
        <h1 id={styles.heading2}>Fight Them Alone.</h1>
        <p className={styles.texts}>
          Nulla rutrum massa a eros aliquet, ut iaculis . Cras varius odio id
          eros
        </p>
        <p className={styles.texts}>
          felis vehicula. In bibendum magna vitae erat pulvinar ultrices hjhjh
        </p>
        <p className={styles.texts}>
          felis vehicula. In bibendum magna vitae erat pulvinar ultrices hjhjh
        </p>
        <div className={styles.email}>
          <input
            placeholder="enter your email address here"
            className={styles.heroSectionInput}
          ></input>
          <button className={styles.heroSectionbutton}>lets talk</button>
        </div>
      </div>
      <img src={heroImage} alt="heroImage" className={styles.heroImage} />
    </div>
  );
};

export default HeroSection;
