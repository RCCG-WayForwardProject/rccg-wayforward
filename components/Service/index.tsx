"use client";
import React, { useEffect, useState } from "react";

import Button from "../Button";
import LoadingCard from "../LoadingCard";
import ServicesCarousel from "./ServiceCarousel";

import styles from "./service.module.scss";

const Services: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

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
        {loading ? (
          <div className={styles["services__loading-card-wrapper"]}>
            <LoadingItems />
          </div>
        ) : (
          <ServicesCarousel />
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
