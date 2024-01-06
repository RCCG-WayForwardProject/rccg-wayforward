import React from "react";

import VisionCard from "./VisionCard";
import { vision } from "@/utils/constants";

import styles from "./vision.module.scss";

const Vision: React.FC = () => {
  return (
    <div className={styles["vision"]}>
      <div className={styles["vision__heading-container"]}>
        <h1 className={styles["vision__heading"]}>Vision of Hope</h1>
        <p className={styles["vision__heading-description"]}>
          We have vision and passion for the outcast, the forgotten, the
          ex-convict, the orphans, and the motherless. the less privileged, the
          old people. Our pastor has a dream; he has a dream to turn the whole
          world around and put smile on people's faces, to bring hope to the
          hopeless, and to make sure that the old people still see themselves as
          relevant in society.
        </p>
      </div>
      <div className={styles["vision__content-wrapper"]}>
        {vision?.map((vision, index) => {
          return (
            <VisionCard
              title={vision?.title}
              content={vision?.content}
              key={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Vision;
