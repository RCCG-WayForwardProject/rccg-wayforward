"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavLink from "@/components/Link";
import Icon from "@/components/Icon";

import { pageRoutes } from "@/utils/routes";

import styles from "./header.module.scss";

interface HeaderProps {}

interface HeaderDropdownProps {
  dropdownList: Array<{ path: string; name: string }>;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ dropdownList }) => {
  return (
    <ul className={styles["header__link-dropdown"]}>
      {dropdownList?.map((dropdownListItem, index) => {
        return (
          <li className={styles["header__link-dropdown-list"]} key={index + 1}>
            <Link
              href={`/${dropdownListItem.path}`}
              className={styles["header__link-dropdown-list-item"]}
            >
              {dropdownListItem.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Header: React.FC<HeaderProps> = ({}) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const pathname = usePathname();
  const homePage = pathname === "/";
  const headerPage = homePage ? "home" : "default";

  const handleDropdownToggle = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <header className={styles["header"]} data-page={headerPage}>
      <div className={styles["header__logo-wrapper"]}>
        <Icon icon="appLogo" />
        {headerPage === "home" ? (
          <Icon icon="appName" />
        ) : (
          <p className={styles["header__logo-name"]}>
            Wayforward <br /> <span>Cathedral</span>
          </p>
        )}
      </div>

      <ul className={styles["header__link-wrapper"]}>
        {pageRoutes?.map((element, index) => {
          return (
            <li className={styles["header__link"]} key={index + 1}>
              {element?.path ? (
                <NavLink path={element.path!} text={element?.name} />
              ) : element?.children ? (
                <div
                  className={styles["header__link-dropdown-wrapper"]}
                  onClick={handleDropdownToggle}
                >
                  <p className={styles["header__link-dropdown-name"]}>
                    {element?.name}
                  </p>
                  {toggleDropdown ? (
                    <HeaderDropdown dropdownList={element?.children} />
                  ) : null}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <ul className={styles["header__mobile-link-wrapper"]}>
        <li>
          <button
            className={styles["header__mobile-link-button"]}
            type="button"
          >
            <Icon icon="navToggleIcon" />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
