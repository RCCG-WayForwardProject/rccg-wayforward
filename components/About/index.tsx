import React from "react";
import Image from "next/image";

import Icon from "../Icon";

import styles from "./about.module.scss";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <div className={styles["about-us"]}>
      <div className={styles["about-us__image-wrapper"]}>
        <div className={styles["about-us__image-cross-icon"]}>
          <Icon icon="cross" />
        </div>
        <div className={styles["about-us__image-container"]}>
          <Image
            src={"/images/teamImage.svg"}
            fill={true}
            priority={false}
            alt="Mixed image of people with different color"
          />
        </div>
        <h2 className={styles["about-us__image-text"]}>
          Experience Exceptional Worship and Life-Impacting Word at Our Church
          in Concord
        </h2>
      </div>

      <div className={styles["about-us__description-wrapper"]}>
        <h1 className={styles["about-us__description-heading"]}>About Us</h1>
        <p className={styles["about-us__description"]}>
          Welcome to The Redeemed Christian Church of God WayForward in Concord,
          where our worship is truly exceptional, and the pure Word of God is a
          guiding light in impacting lives. We take pride in the unique and
          profound way we worship, creating an atmosphere that transcends the
          ordinary. <br /> Our Bible studies and worship ...
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
