"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import Button from "@/components/Button";
import Icon from "@/components/Icon";

import styles from "./modal.module.scss";

type AddTestimonyModalScreen =
  | "testimonyForm"
  | "testimonySuccess"
  | "testimonyError";

const AddTestimoniesModal: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activeScreen, setActiveScreen] =
    useState<AddTestimonyModalScreen>("testimonyForm");

  const form = useRef<HTMLFormElement>(null);

  const handleSetScreen = (screen: AddTestimonyModalScreen) => {
    setActiveScreen(screen);
  };

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
            handleSetScreen("testimonySuccess");
          },
          (error) => {
            handleSetScreen("testimonyError");
          }
        );
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addTestimonyScreen: Record<AddTestimonyModalScreen, JSX.Element> = {
    testimonyForm: (
      <form
        className={styles["modal__form"]}
        ref={form}
        onSubmit={handleFormSubmit}
      >
        <div className={styles["modal__form-info-wrapper"]}>
          <label htmlFor="name" className={styles["modal__form-info-heading"]}>
            Name <span>*</span>
          </label>
          <input
            type="text"
            className={styles["modal__form-info-input"]}
            placeholder="Enter your name"
            name="name"
            id="name"
            required
          />
        </div>
        <div className={styles["modal__form-info-wrapper"]}>
          <label
            htmlFor="testimony"
            className={styles["modal__form-info-heading"]}
          >
            Testimony <span>*</span>
          </label>
          <textarea
            className={styles["modal__form-info-textarea"]}
            id="testimony"
            name="testimony"
            placeholder="Enter testimony"
            required
          />
        </div>
        <div className={styles["modal__form-button"]}>
          <Button
            type="submit"
            label="Send"
            variant="primary"
            size="medium"
            loading={loading}
          />
        </div>
      </form>
    ),
    testimonySuccess: (
      <div className={styles["modal__form--success"]}>
        <div className={styles["modal__form-icon--checkmark"]}>
          <Icon icon="checkmark" />
        </div>
        <h3 className={styles["modal__form--success-heading"]}>
          Your testimony is currently in review
        </h3>
        <Button
          type="button"
          variant="primary"
          label="Done"
          size="medium"
          handleClick={() => handleSetScreen("testimonyForm")}
        />
      </div>
    ),
    testimonyError: (
      <div className={styles["modal__form--success"]}>
        <div className={styles["modal__form-icon--checkmark"]}>
          <Icon icon="error" />
        </div>
        <h3 className={styles["modal__form--success-heading"]}>
          Oops, something went wrong
        </h3>
        <Button
          type="button"
          variant="primary"
          label="Try again"
          size="medium"
          buttonStyle={{ backgroundColor: "#FF7171" }}
          handleClick={() => handleSetScreen("testimonyForm")}
        />
      </div>
    ),
  };

  return (
    <div className={styles["modal__container"]}>
      <h1 className={styles["modal__heading"]}>Add your testimony</h1>
      <div className={styles["modal__form-wrapper"]}>
        {addTestimonyScreen[activeScreen]}
      </div>
    </div>
  );
};

export default AddTestimoniesModal;
