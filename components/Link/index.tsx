"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./link.module.scss";

interface LinkProps {
  path: string;
  text?: string;
}

const NavLink: React.FC<LinkProps> = ({ path, text }) => {
  const pathname = usePathname();
  const isActive =
    pathname.startsWith(`/${path}`) || (pathname === "/" && path === "/");

  return (
    <Link
      href={`/${path}`}
      className={isActive ? `${styles["link__active"]}` : `${styles["link"]}`}
    >
      {Boolean(path || text) ? (
        <p className={styles["link__name"]}>{text} </p>
      ) : null}
      <div className={styles["link__border"]} data-active={isActive}></div>
    </Link>
  );
};

export default NavLink;
