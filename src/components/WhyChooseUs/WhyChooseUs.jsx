import React from "react";
import styles from "./WhyChooseUs.module.css";
import Box from "./Box";

const WhyChooseUs = () => {
  let box1Props = {
    successRate: "98% Success Rate",
    details:
      "hjhjhjhf jdhjhncnjd c jjdhjhf cjjdhjbbv bcjdjhdh cbjdgjfbc bcjgjdghj bcjgjdjgf bcjgdjgjfdj  cjgdjcg bcjdgfj",
  };
  let box2Props = {
    successRate: "100% Success Rate",
    details:
      "hjhjhjhf jdhjhncnjd c jjdhjhf cjjdhjbbv bcjdjhdh cbjdgjfbc bcjgjdghj bcjgjdjgf bcjgdjgjfdj  cjgdjcg bcjdgfj",
  };
  let box3Props = {
    successRate: "100% Success Rate",
    details:
      "hjhjhjhf jdhjhncnjd c jjdhjhf cjjdhjbbv bcjdjhdh cbjdgjfbc bcjgjdghj bcjgjdjgf bcjgdjgjfdj  cjgdjcg bcjdgfj",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container1}>Why Choose Us?</div>
      <div className={styles.container2}>
        <Box boxProps={box1Props} />
        <Box boxProps={box2Props} />
        <Box boxProps={box3Props} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
