import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import Button from "@/components/Button";

import styles from "./contact-form.module.scss";

interface CustomFormProps {
  handleSetScreen: (element: string) => void;
}

const ContactForm: React.FC<CustomFormProps> = ({ handleSetScreen }) => {
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
            handleSetScreen("contactSuccess");
          },
          (error) => {
            handleSetScreen("contactError");
          }
        );
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={styles["contact__form"]}
      ref={form}
      onSubmit={handleFormSubmit}
    >
      <div className={styles["contact__form-info-wrapper"]}>
        <label htmlFor="name" className={styles["contact__form-info-heading"]}>
          Name <span>*</span>
        </label>
        <input
          type="text"
          className={styles["contact__form-info-input"]}
          placeholder="Enter your name"
          name="name"
          id="name"
          required
        />
      </div>
      <div className={styles["contact__form-info-wrapper"]}>
        <label
          htmlFor="user_email"
          className={styles["contact__form-info-heading"]}
        >
          Email <span>*</span>
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className={styles["contact__form-info-input"]}
          placeholder="Enter your email address"
          required
        />
      </div>
      <div className={styles["contact__form-info-wrapper"]}>
        <label
          htmlFor="message"
          className={styles["contact__form-info-heading"]}
        >
          Message <span>*</span>
        </label>
        <textarea
          className={styles["contact__form-info-textarea"]}
          id="message"
          name="message"
          placeholder="Enter message"
          required
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
  );
};

export default ContactForm;
