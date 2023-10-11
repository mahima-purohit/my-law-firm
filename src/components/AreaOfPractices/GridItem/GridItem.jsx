import React from "react";
import styles from "./GridItem.module.css";

const GridItem = ({ image, practiceArea }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="gridImage" className={styles.GridImage} />
      <div className={styles.text}>
        <p>{practiceArea}</p>
      </div>
    </div>
  );
};

export default GridItem;
