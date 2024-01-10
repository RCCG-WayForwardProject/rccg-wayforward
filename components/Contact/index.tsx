"use client";
import React, { useState } from "react";
import Image from "next/image";

import Button from "../Button";
import Icon from "../Icon";
import ContactForm from "./ContactForm";

import styles from "./contact.module.scss";

type ContactType = "contactForm" | "contactSuccess" | "contactError";

const Contact: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<ContactType>("contactForm");

  const handleSetScreen = (screen: ContactType) => {
    setActiveScreen(screen);
  };

  const contactScreen: Record<ContactType, JSX.Element> = {
    contactForm: (
      <ContactForm handleSetScreen={() => handleSetScreen("contactSuccess")} />
    ),
    contactSuccess: (
      <div className={styles["contact__form--success"]}>
        <div className={styles["contact__form-icon--checkmark"]}>
          <Icon icon="checkmark" />
        </div>
        <h3 className={styles["contact__form--success-heading"]}>
          Message Sent Successfully
        </h3>
        <Button
          type="button"
          variant="primary"
          label="Done"
          size="medium"
          handleClick={() => handleSetScreen("contactForm")}
        />
      </div>
    ),
    contactError: (
      <div className={styles["contact__form--success"]}>
        <div className={styles["contact__form-icon--checkmark"]}>
          <Icon icon="error" />
        </div>
        <h3 className={styles["contact__form--success-heading"]}>
          Oops, something went wrong
        </h3>
        <Button
          type="button"
          variant="primary"
          label="Try again"
          size="medium"
          buttonStyle={{ backgroundColor: "#FF7171" }}
          handleClick={() => handleSetScreen("contactForm")}
        />
      </div>
    ),
  };

  return (
    <div className={styles["contact"]}>
      <h1 className={styles["contact__heading"]}>Contact Us</h1>
      <div className={styles["contact__form-wrapper"]}>
        {contactScreen[activeScreen]}
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
