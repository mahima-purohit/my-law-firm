import React from "react";
import styles from "./HeroPage.module.css";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";

const HeroPage = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
};

export default HeroPage;
