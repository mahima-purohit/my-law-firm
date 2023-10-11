import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.heading}>Subscribe Our Newsletter</div>
        <div className={styles.subscriptionForm}>
          <input
            placeholder="Name"
            className={styles.SubscriptionInput}
          ></input>
          <input
            placeholder="Enter your email"
            className={styles.SubscriptionInput}
          ></input>
          <button className={styles.SubscriptionButton}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
