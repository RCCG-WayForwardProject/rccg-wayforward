"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

import Button from "../Button";

import styles from "./contact.module.scss";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_PRAYER_TEMPLATE_ID;
    const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    try {
      setLoading(true);
      await emailjs
        .sendForm(SERVICE_ID!, TEMPLATE_ID!, form.current!, USER_ID)
        .then(
          (result) => {
            console.info(result.text);
          },
          (error) => {
            console.error(error.text);
          }
        );
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles["contact"]}>
      <h1 className={styles["contact__heading"]}>Contact Us</h1>
      <div className={styles["contact__form-wrapper"]}>
        <form
          className={styles["contact__form"]}
          ref={form}
          onSubmit={handleFormSubmit}
        >
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
              loading={loading}
            />
          </div>
        </form>
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
