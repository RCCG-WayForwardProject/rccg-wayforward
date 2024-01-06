import React from "react";

import styles from "./misson.module.scss";
import { mission } from "@/utils/constants";

const Mission: React.FC = () => {
  return (
    <div className={styles["mission"]}>
      <h1 className={styles["mission__heading"]}>Mission & Vision</h1>
      <div className={styles["mission__content-wrapper"]}>
        {mission?.map((mission, index) => {
          return (
            <div className={styles["mission__container"]} key={index + 1}>
              <div className={styles["mission__bullet"]}></div>
              <p className={styles["mission__statement"]}>{mission} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mission;
