"use client";
import React, { useState } from "react";

import Carousel from "../Carousel";
import MusicCard from "./MusicCard";
import Icon from "../Icon";
import Button from "../Button";

import { musics } from "@/utils/constants";

import styles from "./songs.module.scss";

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
          Songs to strengthen <span>God&apos;s Presence</span>
        </h3>
      </div>
      <div className={styles["songs__song-carousel-wrapper"]}>
        <Carousel responsive={responsive}>
          {musics?.map((music, index) => {
            return (
              <div className={styles["songs__song"]} key={index + 1}>
                <MusicCard
                  src={music?.src}
                  name={music?.name}
                  authorName={music?.authorName}
                  duration={music?.musicLength}
                  img={music?.img}
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
