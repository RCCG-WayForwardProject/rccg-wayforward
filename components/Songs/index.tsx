"use client";
import React, { useState, useRef } from "react";

import Carousel from "../Carousel";
import { musics } from "@/utils/constants";

import styles from "./songs.module.scss";
import MusicCard from "./MusicCard";
import Icon from "../Icon";
import Button from "../Button";

const Songs: React.FC = () => {
  const [responsive] = useState({
    0: { items: 2 },
    1400: { items: 4 },
  });

  return (
    <section className={styles["songs"]}>
      <div className={styles["songs__heading-wrapper"]}>
        <h1 className={styles["songs__heading"]}>Gospel Songs</h1>
        <h1 className={styles["songs__heading-mobile"]}> Songs</h1>
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
                <MusicCard
                  src={music?.src}
                  name={music?.name}
                  authorName={music?.authorName}
                  duration={music?.musicLength}
                />
              </div>
            );
          })}
        </Carousel>
        <div className={styles["songs__wave-icon"]}>
          <Icon icon="wave" />
        </div>
      </div>
      <div className={styles["songs__button"]}>
        <Button
          label="View More"
          type="button"
          variant="primary"
          size="small"
        />
      </div>
    </section>
  );
};

export default Songs;
