"use client";
import React, { useEffect, useState } from "react";

import Icon from "../Icon";
import { homeBgImages } from "@/utils/constants";

import styles from "./home.module.scss";

const Home: React.FC = () => {
  let [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeImage < 0) {
        return setActiveImage(homeBgImages.length - 1);
      }
      if (activeImage >= homeBgImages.length) {
        return setActiveImage(0);
      }
      return setActiveImage(activeImage++);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeImage, setActiveImage]);

  return (
    <section
      className={styles["home"]}
      style={{ backgroundImage: `url(/images/${homeBgImages[activeImage]})` }}
    >
      <div className={styles["home__content-background"]}>
        <div className={styles["home__content-wrapper"]}>
          <div className={styles["home__content-cross-icon"]}>
            <Icon icon="cross" />
          </div>
          <div className={styles["home__content-container"]}>
            <div className={styles["home__content-worship-icon"]}>
              <Icon icon="worshipWordIcon" />
            </div>
            <h2 className={styles["home__content-heading"]}>
              Experience Exceptional Worship and Life-Impacting Word.
            </h2>
            <p className={styles["home__content-text"]}>
              Welcome to The Redeemed Christian Church of God WayForward in
              Concord, where our worship is truly exceptional, and the pure Word
              of God is a guiding light in impacting lives. We take pride in the
              unique and profound way we worship, creating an atmosphere that
              transcends the ordinary.
            </p>
            <div className={styles["home__content-mouse-animation"]}>
              <Icon icon="mouseDown" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
