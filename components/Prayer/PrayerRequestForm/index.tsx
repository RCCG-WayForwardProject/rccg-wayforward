import React from "react";

import Button from "../../Button";

import styles from "./request-form.module.scss";

interface PrayerRequestFormProps {
  loading?: boolean;
  disable?: boolean;
}

const PrayerRequestForm: React.FC<PrayerRequestFormProps> = ({
  loading,
  disable,
}) => {
  return (
    <div className={styles["prayer-request__form-container"]}>
      <div className={styles["prayer-request__form-info-wrapper"]}>
        <div className={styles["prayer-request__form-info-name-column"]}>
          <div className={styles["prayer-request__form-info-container"]}>
            <p className={styles["prayer-request__form-info-heading"]}>
              Full Name <span>*</span>
            </p>
            <input
              className={styles["prayer-request__form-info-input"]}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className={styles["prayer-request__form-info-container"]}>
            <p className={styles["prayer-request__form-info-heading"]}>
              Email <span>*</span>
            </p>
            <input
              className={styles["prayer-request__form-info-input"]}
              type="email"
              name="user_email"
              id="user_email"
              required
            />
          </div>
        </div>
        <div className={styles["prayer-request__form-info-container"]}>
          <p className={styles["prayer-request__form-info-heading"]}>
            Prayer Request <span>*</span>
          </p>
          <textarea
            className={styles["prayer-request__form-info-textarea"]}
            name="message"
            id="message"
            required
          />
        </div>
      </div>
      <div className={styles["prayer-request__form-button"]}>
        <Button
          type="submit"
          label="Submit Prayer Request"
          variant="primary"
          size="mini"
          loading={loading}
          disabled={disable}
        />
      </div>
    </div>
  );
};

export default PrayerRequestForm;
