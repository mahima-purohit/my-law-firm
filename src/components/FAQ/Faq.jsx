import React from "react";
import styles from "./Faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import accordionIcon from "../../assets/accordionIcon.png";
import { Typography } from "@mui/material";

const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container1}>
        <p className={styles.Heading}>FAQ</p>
        <p>bvhbhb bchhdbbc bchdhbbc bchgdhhdbc bchdhbbh vbh bhvhc</p>
      </div>
      <div className={styles.accordionContainer}>
        <Accordion sx={{ backgroundColor: "black" }} defaultExpanded>
          <AccordionSummary
            expandIcon={<img src={accordionIcon} alt="acordionIcon" />}
            area-aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ fontSize: "24px", fontWeight: "600", color: "white" }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Do I need a personal Injury report?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "black" }}>
          <AccordionSummary
            expandIcon={<img src={accordionIcon} alt="acordionIcon" />}
            area-aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ fontSize: "24px", fontWeight: "600", color: "white" }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
              }}
            >
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "black" }}>
          <AccordionSummary
            expandIcon={<img src={accordionIcon} alt="acordionIcon" />}
            area-aria-controls="panel3a-content"
            id="panel3a-header"
            sx={{ fontSize: "24px", fontWeight: "600", color: "white" }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
              }}
            >
              What should I do right after car accident?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "black" }}>
          <AccordionSummary
            expandIcon={<img src={accordionIcon} alt="acordionIcon" />}
            area-aria-controls="panel4a-content"
            id="panel4a-header"
            sx={{ fontSize: "24px", fontWeight: "600", color: "white" }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
              }}
            >
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
