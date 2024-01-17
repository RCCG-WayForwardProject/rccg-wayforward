"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

import Button from "../Button";
import Modal from "./Modal";
import { useClickOutside } from "@/utils/useClickOutside";

import styles from "./donation.module.scss";

const Donation: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  useClickOutside(modalRef, setOpenModal, false);

  return (
    <div className={styles["donation__page"]}>
      <div className={styles["donation__content-wrapper"]}>
        <div className={styles["donation__content-icon"]}>
          <Image
            src={
              "https://wayforwarddevbucket.s3.us-west-1.amazonaws.com/Images/donation.png"
            }
            fill
            alt="Giving icon"
            loading="lazy"
          />
        </div>
        <div className={styles["donation__content-container"]}>
          <h1 className={styles["donation__content-heading"]}>Online Giving</h1>
          <p className={styles["donation__content-description"]}>
            If the Lord has touched your heart to donate to our cause, feel free
            to do so. Your financial support enables the church to keep running
            and also help people who are in need. Remember Luke 6:38 (NIV):
            &quot;Give, and it will be given to you. A good measure, pressed
            down, shaken together, and running over, will be poured into your
            lap…&quot;
          </p>
          <div className={styles["donation__content-button"]}>
            <Button
              label="Donate"
              type="button"
              size="mini"
              variant="primary"
              handleClick={handleOpenModal}
            />
          </div>
        </div>
      </div>
      {openModal && (
        <div className={styles["donation__modal-wrapper"]} ref={modalRef}>
          <Modal />
        </div>
      )}
    </div>
  );
};

export default Donation;
