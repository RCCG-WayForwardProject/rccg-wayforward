"use client";
import React, { useState } from "react";
import Image from "next/image";

import styles from "./modal.module.scss";

type DonationTabType = "Bank Transfer" | "Paypal" | "Cash App";

interface ModalProps {}

const BankTransfer: React.FC = () => {
  return (
    <div className={styles["modal__content-container"]}>
      <div className={styles["modal__content-details-wrapper"]}>
        <p className={styles["modal__content-details-heading"]}>Bank Name</p>
        <p className={styles["modal__content-details-description"]}>
          Providus Bank
        </p>
      </div>
      <div className={styles["modal__content-details-wrapper"]}>
        <p className={styles["modal__content-details-heading"]}>Account Name</p>
        <p className={styles["modal__content-details-description"]}>
          Wayforward Cathedral
        </p>
      </div>
      <div className={styles["modal__content-details-wrapper"]}>
        <p className={styles["modal__content-details-heading"]}>
          Account Number
        </p>
        <p className={styles["modal__content-details-description"]}>
          0122036264
        </p>
      </div>
    </div>
  );
};

const Modal: React.FC<ModalProps> = () => {
  const [activeTab, setActiveTab] = useState<DonationTabType>("Bank Transfer");

  const handleActiveTab = (tab: DonationTabType) => {
    setActiveTab(tab);
  };

  const tabList: Record<string, JSX.Element> = {
    "Bank Transfer": <BankTransfer />,
    Paypal: (
      <div className={styles["modal__content-coming-soon"]}>
        <Image
          src={"/images/coming_soon.svg"}
          height={150}
          width={100}
          alt={"coming soon"}
        />
        <p className={styles["modal__content-coming-soon-heading"]}>
          Coming soon
        </p>
      </div>
    ),
    "Cash App": (
      <div className={styles["modal__content-coming-soon"]}>
        <Image
          src={"/images/coming_soon.svg"}
          height={200}
          width={100}
          alt={"coming soon"}
        />
        <p className={styles["modal__content-coming-soon-heading"]}>
          Coming soon
        </p>
      </div>
    ),
  };

  const tabHeader: Array<string> = Object.keys(tabList);

  return (
    <div className={styles["modal"]}>
      <ul className={styles["modal__header-wrapper"]}>
        {tabHeader?.map((element, index) => {
          return (
            <li className={styles["modal__header-item"]} key={index + 1}>
              <button
                className={styles["modal__header-button"]}
                data-active={element === activeTab}
                onClick={() => handleActiveTab(element as DonationTabType)}
              >
                {element}
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles["modal__content-wrapper"]}>
        {tabList[activeTab]}
      </div>
    </div>
  );
};

export default Modal;
