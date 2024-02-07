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
      <h1 className={styles["modal__heading"]}>Launching Soon</h1>
      <h3 className={styles["modal__subheading"]}>3rd March, 2024</h3>
      <p className={styles["modal__description"]}>
        We&apos;re thrilled to announce the launch of our brand-new church! As
        we prepare to open our doors, we invite you to be part of this exciting
        chapter.
      </p>
    </div>
  );
};

export default LaunchModal;
