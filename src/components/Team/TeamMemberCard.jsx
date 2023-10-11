import React from "react";
import styles from "./TeamMemberCard.module.css";

const TeamMemberCard = ({ details }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          src={details.images}
          alt="team member"
          className={styles.teamImage}
        />
      </div>
      <div>
        <p className={styles.memberName}>{details.name}</p>
        <p>{`${details.cases} cases`}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
