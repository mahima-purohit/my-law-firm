import React from "react";
import styles from "./ClientCard.module.css";

const ClientCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.image} alt="clientImage" className={styles.cardImage} />
      <div>
        <p className={styles.cardName}>{data.name}</p>
        <p className={styles.cardDesignation}>{data.designation}</p>
      </div>

      <p className={styles.cardMessage}>{data.message}</p>
    </div>
  );
};

export default ClientCard;
