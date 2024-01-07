import React from "react";

import Button from "@/components/Button";
import { SermonCard } from "@/components/Sermons/SermonsCarousel";

import { sermonsList } from "@/utils/constants";

import styles from "./sermons.module.scss";

const SermonsPage: React.FC = () => {
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
          />
          <Button type="submit" label="Search" variant="primary" size="mini" />
        </div>
        <div className={styles["sermons__sermon-wrapper"]}>
          {sermonsList?.map((sermon, index) => {
            return (
              <SermonCard
                name={sermon?.name}
                img={sermon?.img}
                key={index + 1}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SermonsPage;
