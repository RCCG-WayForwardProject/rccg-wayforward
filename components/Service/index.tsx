"use client";
import React, { useEffect, useState } from "react";

import Button from "../Button";
import LoadingCard from "../LoadingCard";
import ServicesCarousel from "./ServiceCarousel";

import styles from "./service.module.scss";

const Services: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleOpenCalendar = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}${month.toString().padStart(2, "0")}${day
      .toString()
      .padStart(2, "0")}`;

    window.open(`https://calendar.google.com/calendar/r/day/${formattedDate}`);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={styles["services"]}>
      <h1 className={styles["services__heading"]}>Services</h1>
      <div className={styles["services__content-wrapper"]}>
        <div className={styles["services__content-heading-wrapper"]}>
          <p className={styles["services__content-heading"]}>Our Services</p>
          <p className={styles["services__content-description"]}>
            The church runs weekly, and every one of our services is meant to
            enrich you in its special way. While our Sunday Service is very
            comprehensive, our Wednesday and Friday services each meet a
            distinct spiritual need, allowing not only for fellowship but also
            engaging Bible study and scripture-based prayer.
          </p>
        </div>
        {loading ? (
          <div className={styles["services__loading-card-wrapper"]}>
            <LoadingItems />
          </div>
        ) : (
          <ServicesCarousel handleReminderButton={handleOpenCalendar} />
        )}
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

const LoadingItems = () => {
  return (
    <>
      {Array.from({ length: 5 })
        .map((_, i) => i + 1)
        .map((_, index) => {
          return <LoadingCard key={index + 1} />;
        })}
    </>
  );
};
