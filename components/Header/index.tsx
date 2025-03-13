"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import NavLink from "@/components/Link";
import Icon from "@/components/Icon";

import { mobilePageRoutes, pageRoutes } from "@/utils/routes";

import styles from "./header.module.scss";

interface HeaderProps {}

interface HeaderDropdownProps {
  dropdownList: Array<{ path?: string; name: string }>;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ dropdownList }) => {
  return (
    <div className={styles["header__link-dropdown-wrapper"]}>
      <ul className={styles["header__link-dropdown"]}>
        {dropdownList?.map((dropdownListItem, index) => {
          return (
            <li
              className={styles["header__link-dropdown-list"]}
              key={index + 1}
            >
              <NavLink
                path={dropdownListItem?.path!}
                text={dropdownListItem?.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({}) => {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [headerSticky, setHeaderSticky] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const pathname = usePathname();
  const homePage = pathname === "/";
  const headerPage = homePage ? "home" : "default";

  const handleDropdownToggle = (index: number) => {
    setDropdownIndex((prev) => {
      return prev === index ? null : index;
    });
  };

  const handleToggleMobileNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => {
        setHeaderSticky(Boolean(window.scrollY > 500) === true);
      });
    }
  }, []);

  return (
    <header
      className={styles["header"]}
      data-page={headerPage}
      data-sticky={headerSticky}
    >
      <div className={styles["header__logo-wrapper"]}>
        <Icon icon="appLogo" />
        <p
          className={styles["header__logo-name"]}
          data-sticky={headerSticky}
          data-page={Boolean(headerPage === "default")}
        >
          Wayforward <br /> <span>Cathedral</span>
        </p>
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
        <Link href="#donation" className={styles["header__link-button"]}>
          Giving
        </Link>
      </ul>

      <button
        className={styles["header__mobile-link-button"]}
        type="button"
        aria-label="Mobile button link"
        data-sticky={headerSticky}
        data-page={headerPage}
        onClick={handleToggleMobileNav}
      >
        <Icon icon="navToggleIcon" />
      </button>
      {openNav ? (
        <div className={styles["header__mobile-link-overlay-wrapper"]}>
          <button
            className={styles["header__mobile-link-overlay-cancel-button"]}
            onClick={handleToggleMobileNav}
            type="button"
            aria-label="Cancel Button"
          >
            <Icon icon="cancel" />
          </button>
          <div className={styles["header__logo-wrapper"]}>
            <Icon icon="appLogo" />
            <Icon icon={"appName"} />
          </div>
          <ul className={styles["header__mobile-link-container"]}>
            {mobilePageRoutes?.map((element, index) => {
              return (
                <li className={styles["header__mobile-link"]} key={index + 1}>
                  <button
                    onClick={handleToggleMobileNav}
                    type="button"
                    aria-label="Link button"
                  >
                    <NavLink path={element.path!} text={element?.name} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
