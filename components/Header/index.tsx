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
            {/* <Link
              href={`/${dropdownListItem.path}`}
              className={styles["header__link-dropdown-list-item"]}
            >
              {dropdownListItem.name}
            </Link> */}
            <NavLink
              path={dropdownListItem?.path!}
              text={dropdownListItem?.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

const Header: React.FC<HeaderProps> = ({}) => {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const pathname = usePathname();
  const homePage = pathname === "/";
  const headerPage = homePage ? "home" : "default";

  const handleDropdownToggle = (index: number) => {
    setDropdownIndex((prev) => {
      return prev === index ? null : index;
    });
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
            <li
              className={styles["header__link"]}
              key={index + 1}
              data-page={headerPage}
            >
              {element?.path ? (
                <NavLink path={element.path!} text={element?.name} />
              ) : element?.children ? (
                <div
                  className={styles["header__link-dropdown-wrapper"]}
                  onClick={() => handleDropdownToggle(index)}
                >
                  <p
                    className={styles["header__link-dropdown-name"]}
                    data-page={headerPage}
                  >
                    {element?.name}
                  </p>
                  <div
                    className={styles["header__link-dropdown-container"]}
                    data-toggle={Boolean(dropdownIndex === index) === true}
                  >
                    <HeaderDropdown dropdownList={element?.children} />
                  </div>
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
