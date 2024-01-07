"use client";
import React from "react";

import Button from "@/components/Button";

import styles from "./musics.module.scss";
import { musics } from "@/utils/constants";
import MusicCard from "@/components/Songs/MusicCard";

const SongsPage: React.FC = () => {
  return (
    <div className={styles["musics"]}>
      <div className={styles["musics__heading-wrapper"]}>
        <h1 className={styles["musics__heading"]}>Gospel Songs</h1>
        <p className={styles["musics__heading-description"]}>
          Songs to strengthen <span>God&apos;s Presence</span>
        </p>
      </div>
      <div className={styles["musics__input-wrapper"]}>
        <input
          type="search"
          className={styles["musics__input"]}
          placeholder="Search music"
        />
        <Button type="submit" label="Search" variant="primary" size="mini" />
      </div>
      <div className={styles["musics__music-wrapper"]}>
        {musics?.map((music, index) => {
          return (
            <div className={styles["musics__music-card"]} key={index + 1}>
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
      </div>
    </div>
  );
};

export default SongsPage;
