"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

import { PrayerRequestFormScreen } from "@/utils/types";

import Icon from "../Icon";
import Button from "../Button";
import PrayerRequestForm from "./PrayerRequestForm";

import styles from "./prayer.module.scss";

const Prayer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activeScreen, setActiveScreen] =
    useState<PrayerRequestFormScreen>("prayerRequestForm");
  const form = useRef<HTMLFormElement>(null);

  const handleSetScreen = (screen: PrayerRequestFormScreen) => {
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
            handleSetScreen("requestSent");
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

  const prayerRequestFormScreen: Record<string, JSX.Element> = {
    prayerRequestForm: <PrayerRequestForm loading={loading} />,
    requestSent: (
      <div className={styles["prayer__form-success"]}>
        <p className={styles["prayer__form-success-heading"]}>
          Prayer Request Sent Successfully
        </p>
        <div className={styles["prayer__form-success-icon"]}>
          <Icon icon="checkmark" />
        </div>
        <Button
          type="button"
          variant="primary"
          label="Done"
          size="medium"
          handleClick={() => handleSetScreen("prayerRequestForm")}
        />
      </div>
    ),
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
          Would you like us to join you in prayer for any special demand? Please
          provide your details here, and we’ll not only table your requests
          before the Throne of Grace (Heb. 4:16) but also reach out to you for
          support and guidance.
          <br />
          Rest assured that your requests and details are confidential and will
          not be shared with anyone other than the Lord.
        </p>
      </div>
      <form
        className={styles["prayer__form-wrapper"]}
        ref={form}
        onSubmit={handleFormSubmit}
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
          <div className={styles["prayer__form-content-wrapper"]}>
            {prayerRequestFormScreen[activeScreen]}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Prayer;
