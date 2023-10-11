import React from "react";
import styles from "./ClientReview.module.css";
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";
import ClientCard from "./ClientCard";
import client1 from "../../assets/clientpictures/Client1.png";
import client2 from "../../assets/clientpictures/client2.png";
import client3 from "../../assets/clientpictures/client3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSwiper } from "swiper/react";

const ClientReview = () => {
  const swiper = useSwiper();

  let clients = [
    {
      image: client1,
      name: "Jane Cooper",
      designation: "Ceo of Hunt",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
    {
      image: client2,
      name: "Devon Lane",
      designation: "Ceo of Hunt",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
    {
      image: client3,
      name: "Robers Fox",
      designation: "Ceo of Hunt",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
    {
      image: client3,
      name: "Robers Fox",
      designation: "Ceo of Hunt",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
    {
      image: client3,
      name: "Robers Fox",
      designation: "Ceo of Hunt",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerContainer1}>
        <p className={styles.heading}>What says our happy Clients</p>
      </div>
      <div className={styles.carouselWrapper}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log("slide Change")}
        >
          <LeftNavigation />
          <RightNavigation />
          {clients.map((client) => {
            return (
              <SwiperSlide>
                <ClientCard data={client} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientReview;
