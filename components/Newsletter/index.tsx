import React from "react";

import styles from "./newsletter.module.scss";
import Icon from "../Icon";
import Button from "../Button";

const Newsletter: React.FC = () => {
  return (
    <div className={styles["newsletter"]}>
      <h1 className={styles["newsletter__heading"]}>Newsletter</h1>
      <div className={styles["newsletter__form-wrapper"]}>
        <div className={styles["newsletter__form-icon"]}>
          <Icon icon="inbox" />
        </div>
        <div className={styles["newsletter__form"]}>
          <h3 className={styles["newsletter__form-heading"]}>
            Sign Up For Our Newsletter
          </h3>
          <div className={styles["newsletter__form-input-wrapper"]}>
            <p className={styles["newsletter__form-input-label"]}>Email</p>
            <input type="email" className={styles["newsletter__form-input"]} />
          </div>
          <div className={styles["newsletter__form-button"]}>
            <Button
              type="submit"
              label="Sign Up"
              size="mini"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
