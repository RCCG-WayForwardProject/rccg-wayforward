"use client";
import React, { useState } from "react";

import Button from "@/components/Button";
import MusicCard from "./MusicCard";
import Contact from "@/components/Contact";

import { musics } from "@/utils/constants";

import styles from "./musics.module.scss";

const SongsPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredMusics = musics.filter((music) =>
    music.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
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
            value={query}
            onChange={handleSearchChange}
          />
          <Button type="submit" label="Search" variant="primary" size="mini" />
        </div>
        <div className={styles["musics__music-wrapper"]}>
          {filteredMusics?.map((music, index) => {
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
      <Contact />
    </>
  );
};

export default SongsPage;
