import React from "react";

import styles from "./sermons.module.scss";

interface SermonsProps {}

const Sermons: React.FC<SermonsProps> = ({}) => {
  return (
    <section className={styles["sermons"]}>
      <h1>Hello World</h1>
    </section>
  );
};

export default Sermons;
