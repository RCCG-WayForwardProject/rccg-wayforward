"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import Icon from "../Icon";
import Button from "../Button";

import { NewsLetterFormScreen } from "@/utils/types";

import styles from "./newsletter.module.scss";

const Newsletter: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activeScreen, setActiveScreen] =
    useState<NewsLetterFormScreen>("signUpSuccess");

  const form = useRef<HTMLFormElement>(null);

  const handleSetScreen = (screen: NewsLetterFormScreen) => {
    setActiveScreen(screen);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID;
    const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    try {
      setLoading(true);
      await emailjs
        .sendForm(SERVICE_ID!, TEMPLATE_ID!, form.current!, USER_ID)
        .then(
          (result) => {
            handleSetScreen("signUpSuccess");
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

  const newsLetterScreen: Record<NewsLetterFormScreen, JSX.Element> = {
    signUpForm: (
      <>
        <h3 className={styles["newsletter__form-heading"]}>
          Sign Up For Our Newsletter
        </h3>
        <div className={styles["newsletter__form-input-wrapper"]}>
          <p className={styles["newsletter__form-input-label"]}>Email</p>
          <input
            type="email"
            name="user_email"
            className={styles["newsletter__form-input"]}
          />
        </div>
        <div className={styles["newsletter__form-button"]}>
          <Button
            type="submit"
            label="Sign Up"
            size="mini"
            variant="primary"
            loading={loading}
          />
        </div>
      </>
    ),
    signUpSuccess: (
      <div className={styles["newsletter__form--success"]}>
        <h3 className={styles["newsletter__form-heading"]}>
          Newsletter Sign Up Successful
        </h3>
        <div className={styles["newsletter__form-icon--checkmark"]}>
          <Icon icon="checkmark" />
        </div>
        <Button
          type="button"
          variant="primary"
          label="Done"
          size="medium"
          handleClick={() => handleSetScreen("signUpForm")}
        />
      </div>
    ),
  };

  return (
    <div className={styles["newsletter"]}>
      <h1 className={styles["newsletter__heading"]}>Newsletter</h1>
      <div className={styles["newsletter__form-wrapper"]}>
        <div className={styles["newsletter__form-icon"]}>
          <Icon icon="inbox" />
        </div>
        <form
          className={styles["newsletter__form"]}
          onSubmit={handleFormSubmit}
          ref={form}
        >
          {newsLetterScreen[activeScreen]}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
