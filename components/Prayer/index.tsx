"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

import Button from "../Button";

import styles from "./prayer.module.scss";

const Prayer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAIL_USER_ID!);
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_EMAIL_USER_ID;
    try {
      setLoading(true);

      await emailjs
        .sendForm(
          SERVICE_ID!,
          TEMPLATE_ID!,
          form.current!,
          "wesaPLVNt5XwovR_7O7vi"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      alert("email successfully sent check inbox");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles["prayer"]}>
      <div className={styles["prayer__heading-wrapper"]}>
        <h1 className={styles["prayer__heading-mobile"]}>Prayer</h1>
        <h1 className={styles["prayer__heading"]}>Prayer Request</h1>
        <div className={styles["prayer__form-image-mobile"]}>
          <Image
            src={"/images/prayer.png"}
            fill
            loading="lazy"
            alt="A praying woman"
          />
        </div>
        <p className={styles["prayer__heading-description"]}>
          Welcome to The Redeemed Christian Church of God WayForward in Concord,
          where our worship is truly exceptional, and the pure Word of God is a
          guiding light in impacting lives. We take pride in the unique and
          profound way we worship, creating an atmosphere that transcends the
          ordinary. Our Bible studies and worship ...
        </p>
      </div>
      <form
        className={styles["prayer__form-wrapper"]}
        ref={form}
        onSubmit={handleSubmit}
      >
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
                    name="user_name"
                    id="user_name"
                    required
                  />
                </div>
                <div className={styles["prayer__form-info-container"]}>
                  <p className={styles["prayer__form-info-heading"]}>Email</p>
                  <input
                    className={styles["prayer__form-info-input"]}
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                  />
                </div>
              </div>
              <div className={styles["prayer__form-info-container"]}>
                <p className={styles["prayer__form-info-heading"]}>
                  Prayer Request
                </p>
                <textarea
                  className={styles["prayer__form-info-textarea"]}
                  name="message"
                  id="message"
                  required
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
      </form>
    </div>
  );
};

export default Prayer;
