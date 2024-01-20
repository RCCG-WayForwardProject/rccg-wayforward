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
          In line with James 1:27, we have a vision and passion for the outcast,
          the forgotten, the ex-convicts, the orphans, the motherless, the less
          privileged, and senior citizens. With the Lord&apos;s guidance, our
          pastor has a dream: to make the world kinder and put smiles on
          people&apos;s faces, to bring hope to the hopeless, and to ensure that
          aged brethren still see themselves as relevant in society.
        </p>
      </div>
      {/* <div className={styles["vision__content-wrapper"]}>
        {vision?.map((vision, index) => {
          return (
            <VisionCard
              title={vision?.title}
              content={vision?.content}
              key={index + 1}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default Vision;
