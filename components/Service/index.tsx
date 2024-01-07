"use client";
import React from "react";

import Button from "../Button";
import ServicesCarousel from "./ServiceCarousel";

import styles from "./service.module.scss";

const Services: React.FC = () => {
  return (
    <div className={styles["services"]}>
      <h1 className={styles["services__heading"]}>Services</h1>
      <div className={styles["services__content-wrapper"]}>
        <div className={styles["services__content-heading-wrapper"]}>
          <p className={styles["services__content-heading"]}>Our Services</p>
          <p className={styles["services__content-description"]}>
            Welcome to The Redeemed Christian Church of God WayForward in
            Concord, where our worship is truly exceptional, and the pure Word
            of God is a guiding light in impacting lives. We take pride in the
            unique and profound way we worship, creating an atmosphere that
            transcends the ordinary. Our Bible studies and worship ...
          </p>
        </div>
        <ServicesCarousel />
        <div className={styles["services__view-button"]}>
          <Button
            label="View More"
            variant="primary"
            size="small"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
