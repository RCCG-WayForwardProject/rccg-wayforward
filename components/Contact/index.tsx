import React from "react";
import Image from "next/image";

import Button from "../Button";

import styles from "./contact.module.scss";

const Contact: React.FC = () => {
  return (
    <div className={styles["contact"]}>
      <h1 className={styles["contact__heading"]}>Contact Us</h1>
      <div className={styles["contact__form-wrapper"]}>
        <div className={styles["contact__form"]}>
          <div className={styles["contact__form-info-wrapper"]}>
            <p className={styles["contact__form-info-heading"]}>Name</p>
            <input
              type="text"
              className={styles["contact__form-info-input"]}
              placeholder="Enter your name"
            />
          </div>
          <div className={styles["contact__form-info-wrapper"]}>
            <p className={styles["contact__form-info-heading"]}>Email</p>
            <input
              type="email"
              className={styles["contact__form-info-input"]}
              placeholder="Enter your email address"
            />
          </div>
          <div className={styles["contact__form-info-wrapper"]}>
            <p className={styles["contact__form-info-heading"]}>Message</p>
            <textarea
              className={styles["contact__form-info-textarea"]}
              placeholder="Enter message"
            />
          </div>
          <div className={styles["contact__form-button"]}>
            <Button
              type="submit"
              label="Send"
              variant="primary"
              size="medium"
            />
          </div>
        </div>
        <div className={styles["contact__form-image"]}>
          <Image
            src={"/images/contact_image.svg"}
            width={533}
            height={533}
            alt="Contact Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
