import React from "react";
import styles from "./Box.module.css";
import giftIcon from "../../assets/Gift 1.png";

const Box = ({ boxProps }) => {
  return (
    <div className={styles.box}>
      <div className={styles.giftIconwrap}>
        <img src={giftIcon} alt="gift icon" width={101} height={101} />
      </div>
      <div className={styles.sucessRate}>{boxProps.successRate}</div>
      <div className={styles.details}>
        <p>{boxProps.details}</p>
      </div>
      <button className={styles.boxButton}>Read More</button>
    </div>
  );
};

export default Box;
