import React from "react";

import styles from "./loading-card.module.scss";

const LoadingCard: React.FC = () => {
  return (
    <div className={styles["loading__card"]}>
      <div className={styles["loading__image"]}></div>
      <div className={styles["loading__name"]}>
        <div className={styles["loading__pulse"]}></div>
      </div>
      <div className={styles["loading__button"]}>
        <div className={styles["loading__pulse"]}></div>
      </div>
    </div>
  );
};

export default LoadingCard;
