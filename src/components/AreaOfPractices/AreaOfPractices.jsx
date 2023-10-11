import React from "react";
import styles from "./AreaOfPractices.module.css";
import image1 from "../../assets/GridImages/Rectangle 3652.png";
import image2 from "../../assets/GridImages/Rectangle 3651.png";
import image3 from "../../assets/GridImages/Rectangle 3653.png";
import image4 from "../../assets/GridImages/Rectangle 3654.png";
import image5 from "../../assets/GridImages/Rectangle 3656.png";
import image6 from "../../assets/GridImages/Rectangle 3655.png";
import styles1 from "../WhyChooseUs/WhyChooseUs.module.css";
import GridItem from "./GridItem/GridItem";

const AreaOfPractices = () => {
  const GridItems = [
    { imageSource: image1, title: "BusinessLaw" },
    { imageSource: image2, title: "Partnership Law" },
    { imageSource: image3, title: "Real Estate Law" },
    { imageSource: image4, title: "Business Law" },
    { imageSource: image5, title: "Landlord disputes" },
    { imageSource: image6, title: "Elder abuse" },
  ];
  console.log(typeof GriImages);
  return (
    <div className={styles.wrapper}>
      <div className={styles1.container1}>Area of Practices</div>
      <div className={styles.gridContainer}>
        {GridItems.map((item) => {
          return (
            <GridItem image={item.imageSource} practiceArea={item.title} />
          );
        })}
      </div>
    </div>
  );
};

export default AreaOfPractices;
