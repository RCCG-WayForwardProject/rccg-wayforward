import React from "react";
import styles from "./header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={styles["header__wrapper"]}>
      <h1 className={styles["header__name"]}>Header</h1>
      <ul className={styles["header__link-wrapper"]}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default Header;
