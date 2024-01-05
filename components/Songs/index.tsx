"use client";
import React, { useState } from "react";

import Carousel from "../Carousel";
import { musics } from "@/utils/constants";

import styles from "./songs.module.scss";

const Songs: React.FC = () => {
  const [responsive] = useState({
    0: { items: 2 },
    1400: { items: 5 },
  });

  return (
    <section className={styles["songs"]}>
      <div className={styles["songs__heading-wrapper"]}>
        <h1 className={styles["songs__heading"]}>Gospel Songs</h1>
        <h3 className={styles["songs__subheading"]}>
          Songs to strengthen <span>God's Presence</span>
        </h3>
      </div>
      <div className={styles["songs__song-carousel-wrapper"]}>
        <Carousel responsive={responsive}>
          {musics?.map((music, index) => {
            return (
              <div
                key={index + 1}
                className={styles["songs__song"]}
                style={{
                  backgroundImage: `url(/images/${music?.img})`,
                  width: "200px",
                }}
              >
                <h1>Hello World</h1>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Songs;
