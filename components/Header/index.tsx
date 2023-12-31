"use client";
import React from "react";
import { usePathname } from "next/navigation";

import NavLink from "@/components/Link";
import Icon from "@/components/Icon";

import { pageRoutes } from "@/utils/routes";

import styles from "./header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const pathname = usePathname();
  const homePage = pathname === "/";
  const headerPage = homePage ? "home" : "default";

  return (
    <header className={styles["header"]} data-page={headerPage}>
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
