import React from "react";
import styles from "./Team.module.css";
import styles1 from "../WhyChooseUs/WhyChooseUs.module.css";
import TeamMemberCard from "./TeamMemberCard";
import team1 from "../../assets/teamImages/team1.png";
import team2 from "../../assets/teamImages/team2.png";
import team3 from "../../assets/teamImages/team3.png";
import team4 from "../../assets/teamImages/team4.png";
import team5 from "../../assets/teamImages/team5.png";
import team6 from "../../assets/teamImages/team6.png";
import Grid from "@mui/material/Unstable_Grid2";

const Team = () => {
  let teamMembers = [
    {
      name: "Danial Def",
      cases: 301,
      images: team1,
    },
    {
      name: "Sanfole",
      cases: 850,
      images: team2,
    },
    {
      name: "Cesforila",
      cases: 470,
      images: team3,
    },
    {
      name: "Colleen",
      cases: 180,
      images: team4,
    },
    {
      name: "Haldone",
      cases: 121,
      images: team5,
    },
    {
      name: "Nik Joe",
      cases: 350,
      images: team6,
    },
  ];
  console.log(teamMembers);
  return (
    <div className={styles.wrapper}>
      <div className={styles1.container1}>Our Team</div>
      <div className={styles.gridContainer}>
        <Grid container spacing={2}>
          {teamMembers.map((member) => {
            return (
              <Grid xs={4}>
                <TeamMemberCard details={member} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Team;
