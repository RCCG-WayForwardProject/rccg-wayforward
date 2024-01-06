import React from "react";

import styles from "./prayer.module.scss";
import Button from "../Button";
import Image from "next/image";

const Prayer: React.FC = () => {
  return (
    <div className={styles["prayer"]}>
      <div className={styles["prayer__heading-wrapper"]}>
        <h1 className={styles["prayer__heading"]}>Prayer Request</h1>
        <p className={styles["prayer__heading-description"]}>
          Welcome to The Redeemed Christian Church of God WayForward in Concord,
          where our worship is truly exceptional, and the pure Word of God is a
          guiding light in impacting lives. We take pride in the unique and
          profound way we worship, creating an atmosphere that transcends the
          ordinary. Our Bible studies and worship ...
        </p>
      </div>
      <div className={styles["prayer__form-wrapper"]}>
        <h1 className={styles["prayer__form-heading"]}>Prayer</h1>
        <div className={styles["prayer__form"]}>
          <div className={styles["prayer__form-image"]}>
            <Image
              src={"/images/prayer.png"}
              fill
              loading="lazy"
              alt="A praying woman"
            />
          </div>
          <div className={styles["prayer__form-container"]}>
            <div className={styles["prayer__form-info-wrapper"]}>
              <div className={styles["prayer__form-info-name-column"]}>
                <div className={styles["prayer__form-info-container"]}>
                  <p className={styles["prayer__form-info-heading"]}>
                    Full Name
                  </p>
                  <input
                    className={styles["prayer__form-info-input"]}
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className={styles["prayer__form-info-container"]}>
                  <p className={styles["prayer__form-info-heading"]}>Email</p>
                  <input
                    className={styles["prayer__form-info-input"]}
                    type="email"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className={styles["prayer__form-info-container"]}>
                <p className={styles["prayer__form-info-heading"]}>
                  Prayer Request
                </p>
                <textarea
                  className={styles["prayer__form-info-textarea"]}
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className={styles["prayer__form-button"]}>
              <Button
                type="submit"
                label="Submit Prayer Request"
                variant="primary"
                size="mini"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prayer;
