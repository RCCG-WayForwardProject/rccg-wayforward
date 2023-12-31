import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./link.module.scss";

interface LinkProps {
  path: string;
  text?: string;
}

const Link: React.FC<LinkProps> = ({ path, text }) => {
  return (
    <NavLink
      to={`/${path}`}
      className={({ isActive }) =>
        isActive ? `${styles["link__active"]}` : `${styles["link"]}`
      }
    >
      {Boolean(path || text) ? (
        <p className={styles["link__name"]}>{text} </p>
      ) : null}
    </NavLink>
  );
};

export default Link;
