"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Icon from "@/components/Icon";
import Button from "@/components/Button";

import styles from "./about.module.scss";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  const { push } = useRouter();

  const handleRouteToAboutPage = () => {
    push("/about-us");
  };
  return (
    <section className={styles["about-us"]}>
      <div className={styles["about-us__image-wrapper"]}>
        <div className={styles["about-us__image-cross-icon"]}>
          <Icon icon="cross" />
        </div>
        <p className={styles["about-us__image-heading"]}>About Us</p>
        <div className={styles["about-us__image-container"]}>
          <Image
            src={"/images/teamImage.svg"}
            fill={true}
            priority={false}
            loading={"lazy"}
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
        <Button
          label="View More"
          type="button"
          variant="primary"
          size="small"
          handleClick={handleRouteToAboutPage}
        />
      </div>
    </section>
  );
};

export default AboutUs;
