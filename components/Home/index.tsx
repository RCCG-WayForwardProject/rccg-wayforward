import React from "react";

import Icon from "../Icon";

import styles from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <section className={styles["home"]}>
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
    </section>
  );
};

export default Home;
