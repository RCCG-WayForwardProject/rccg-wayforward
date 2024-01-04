"use client";
import React from "react";

import styles from "./service.module.scss";
import Carousel from "../Carousel";
import { services } from "@/utils/constants";
import Image from "next/image";
import Icon from "../Icon";
import Button from "../Button";

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
        <Carousel>
          {services?.map((service, index) => {
            return (
              <div key={index + 1} className={styles["services__service"]}>
                <div className={styles["services__service-image"]}>
                  <Image
                    src={`/images/${service.img}`}
                    height={165}
                    width={192}
                    alt="Service image"
                    loading="lazy"
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
                    size="medium"
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
