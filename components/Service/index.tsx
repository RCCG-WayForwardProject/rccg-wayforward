"use client";
import React, { useState } from "react";
import Image from "next/image";

import { services } from "@/utils/constants";

import Carousel from "../Carousel";
import Icon from "../Icon";
import Button from "../Button";

import styles from "./service.module.scss";

const Services: React.FC = () => {
  const [responsive] = useState({
    0: { items: 1 },
    1000: { items: 2 },
    1400: { items: 2 },
  });

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
        <Carousel responsive={responsive} contentGap={16}>
          {services?.map((service, index) => {
            return (
              <div key={index + 1} className={styles["services__service"]}>
                <div className={styles["services__service-image"]}>
                  <Image
                    src={`/images/${service.img}`}
                    fill
                    alt="Service image"
                    loading="lazy"
                    style={{ borderRadius: "13px" }}
                  />
                </div>
                <div className={styles["services__service-content-wrapper"]}>
                  <p className={styles["services__service-name"]}>
                    {service?.name}
                  </p>
                  <div className={styles["services__service-day-wrapper"]}>
                    <Icon icon="calendar" />
                    <p className={styles["services__service-day"]}>
                      Every {service?.day}
                    </p>
                  </div>
                  <div className={styles["services__service-location-wrapper"]}>
                    <Icon icon="location" />
                    <p className={styles["services__service-location"]}>
                      {service?.location}
                    </p>
                  </div>
                  <Button
                    type="button"
                    label="Set Reminder"
                    variant="primary"
                    size="small"
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
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
