import React from "react";

import styles from "./footer.module.scss";
import { footerInfo, footerLink } from "@/utils/constants";
import { IconNames } from "@/utils/icon";
import Icon from "../Icon";

const Footer: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__info-wrapper"]}>
        {footerInfo?.map((element, index) => {
          return (
            <div className={styles["footer__info-container"]} key={index + 1}>
              <button className={styles["footer__info-button"]}>
                <Icon icon={element?.icon as IconNames} />
              </button>
              <div className={styles["footer__info"]}>
                <p className={styles["footer__info-heading"]}>
                  {element?.title}
                </p>
                <p className={styles["footer__info-description"]}>
                  {element?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles["footer__link-container"]}>
        {footerLink?.map((element, index) => {
          return (
            <button className={styles["footer__link-button"]} key={index + 1}>
              <a
                href={element?.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer__link"]}
              >
                <Icon icon={element?.icon as IconNames} />
              </a>
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
