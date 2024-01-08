import React from "react";
import Image from "next/image";

import Button from "@/components/Button";
import Icon from "@/components/Icon";

import styles from "./service-card.module.scss";

interface ServiceCardProps {
  img: string;
  name: string;
  day: string;
  location: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  img,
  name,
  day,
  location,
}) => {
  return (
    <div className={styles["services__service"]}>
      <div className={styles["services__service-image"]}>
        <Image
          src={`/images/${img}`}
          fill
          alt="Service image"
          loading="lazy"
          style={{ borderRadius: "13px" }}
        />
      </div>
      <div className={styles["services__service-content-wrapper"]}>
        <p className={styles["services__service-name"]}>{name}</p>
        <div className={styles["services__service-day-wrapper"]}>
          <Icon icon="calendar" />
          <p className={styles["services__service-day"]}>{day}</p>
        </div>
        <div className={styles["services__service-location-wrapper"]}>
          <Icon icon="location" />
          <p className={styles["services__service-location"]}>{location}</p>
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
};
