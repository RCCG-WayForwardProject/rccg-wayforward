"use client";
import React from "react";
import Image from "next/image";

import Icon from "../Icon";
import Accordion from "./Accordion";

import styles from "./faq.module.scss";

interface FAQProps {
  faq: Array<{ title: string; content: string }>;
}

const FAQ: React.FC<FAQProps> = ({ faq }) => {
  return (
    <div className={styles["faq"]}>
      <h1 className={styles["faq__heading"]}>FAQ&apos;s</h1>
      <div className={styles["faq__content-wrapper"]}>
        <div className={styles["faq__image"]}>
          <Image
            src={
              "https://wayforwarddevbucket.s3.us-west-1.amazonaws.com/Images/faq-img.png"
            }
            alt="Person thinking"
            width={474}
            height={434}
            loading="lazy"
          />
          <div className={styles["faq__image-icon"]}>
            <Icon icon="questionMark" />
          </div>
        </div>
        <div className={styles["faq__accordion-wrapper"]}>
          {faq?.map((element, index) => {
            return (
              <Accordion
                key={index + 1}
                title={element?.title}
                content={element?.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
