"use client";
import React from "react";

import Icon from "../Icon";

import styles from "./modal.module.scss";

const LaunchModal: React.FC = () => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__logo-wrapper"]}>
        <Icon icon="appLogo" />
        <p className={styles["modal__logo-name"]}>
          Wayforward <br /> <span>Cathedral</span>
        </p>
      </div>
      <h1 className={styles["modal__heading"]}>Grand Opening</h1>
      <h3 className={styles["modal__subheading"]}>3rd March, 2024</h3>
      <p className={styles["modal__description"]}>
        You are warmly invited to join us in celebrating a new beginning! After
        months of dedication from our community, we are proud to announce that
        the doors of our brand-new church home will open on March 3rd, 2024.
        <br />
        <br />
        Whether a longtime member or new face, please help us spread the word.
        Share in the excitement of our new beginnings and be part of writing the
        next chapter in our story. Our doors may be new, but our welcome remains
        as warm as ever. We look forward to seeing you on March 3rd!
      </p>
    </div>
  );
};

export default LaunchModal;
