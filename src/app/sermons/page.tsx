"use client";
import React, { useState } from "react";

import Button from "@/components/Button";
import { SermonCard } from "@/components/Sermons/SermonCard";
import MusicCard from "@/components/Songs/MusicCard";
import Contact from "@/components/Contact";

import { sermonsList } from "@/utils/constants";

import styles from "./sermons.module.scss";

const SermonsPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredSermons = sermonsList.filter((sermon) =>
    sermon.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className={styles["sermons"]}>
        <div className={styles["sermons__heading-wrapper"]}>
          <h1 className={styles["sermons__heading"]}>Sermons</h1>
          <p className={styles["sermons__heading-description"]}>
            Catch up on our <span>Recent Sermons</span>
          </p>
        </div>
        <div className={styles["sermons__input-wrapper"]}>
          <input
            type="search"
            className={styles["sermons__input"]}
            placeholder="Search sermon"
            value={query}
            onChange={handleSearchChange}
          />
          <Button type="submit" label="Search" variant="primary" size="mini" />
        </div>
        <div className={styles["sermons__sermon-wrapper"]}>
          {filteredSermons.map((sermon, index) => (
            <div className={styles["sermons__sermon-card"]} key={index + 1}>
              <MusicCard
                name={sermon.name}
                img={sermon.img}
                src={sermon?.src}
                duration={sermon?.duration}
                downloadable
              />
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default SermonsPage;
