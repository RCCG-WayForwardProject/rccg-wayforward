"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";

import Icon from "../Icon";
import { slidesContent } from "@/utils/constants";

import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <section>
      <AliceCarousel
        animationType="fadeout"
        animationDuration={2000}
        animationEasingFunction="ease-in-out"
        autoPlay
        autoPlayInterval={10000}
        infinite
        disableButtonsControls
        disableDotsControls
      >
        {slidesContent?.map((element, index) => {
          return (
            <div
              key={index + 1}
              className={styles["home"]}
              style={{
                backgroundImage: `url(images/${element.img} )`,
              }}
            >
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
                    Welcome to The Redeemed Christian Church of God WayForward
                    in Concord, where our worship is truly exceptional, and the
                    pure Word of God is a guiding light in impacting lives. We
                    take pride in the unique and profound way we worship,
                    creating an atmosphere that transcends the ordinary.
                  </p>
                  <div className={styles["home__content-mouse-animation"]}>
                    <Icon icon="mouseDown" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </AliceCarousel>
    </section>
  );
};

export default Home;
