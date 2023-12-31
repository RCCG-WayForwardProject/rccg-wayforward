import React from "react";

import NavLink from "@/components/Link";
import Icon from "@/components/Icon";

import { pageRoutes } from "@/utils/routes";

import styles from "./header.module.scss";

type HeaderType = "light" | "dark";
interface HeaderProps {
  headerType?: HeaderType;
}

const Header: React.FC<HeaderProps> = ({ headerType }) => {
  return (
    <header className={styles["header"]} data-type={headerType}>
      <div className={styles["header__logo-wrapper"]}>
        <Icon icon="appLogo" />
        <div className={styles["header__logo-name"]}>Wayforward Cathedral</div>
      </div>

      <ul className={styles["header__link-wrapper"]}>
        {pageRoutes?.map((element, index) => {
          return (
            <li className={styles["header__link"]} key={index + 1}>
              <NavLink path={element.path!} text={element?.name} />
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
