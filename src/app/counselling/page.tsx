import React from "react";

import styles from "./counselling.module.scss";

const Counselling: React.FC = () => {
  return (
    <div className={styles["counselling"]}>
      <h1 className={styles["counselling__heading"]}>Book Appointment</h1>
      <p className={styles["counselling__description"]}>
        We have passion for them; we will rehabilitate them; we will introduce
        someone to them, Jesus Christ; we will make sure that they learn
        handwork; or if they still want to go to school, we will make the
        provision; and we will also make sure that there is no room for
        discrimination.
      </p>
      <div></div>
    </div>
  );
};

export default Counselling;
