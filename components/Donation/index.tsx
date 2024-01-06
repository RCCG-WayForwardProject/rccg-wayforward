import React from "react";

import styles from "./donation.module.scss";
import Image from "next/image";
import Button from "../Button";

const Donation: React.FC = () => {
  return (
    <div className={styles["donation__page"]}>
      <div className={styles["donation__content-wrapper"]}>
        <div className={styles["donation__content-icon"]}>
          <Image
            src={"/images/donation.png"}
            fill
            alt="Giving icon"
            loading="eager"
          />
        </div>
        <div className={styles["donation__content-container"]}>
          <h1 className={styles["donation__content-heading"]}>Online Giving</h1>
          <p className={styles["donation__content-description"]}>
            Lorem ipsum dolor sit amet consectetur. Duis vulputate libero turpis
            gravida. Sit blandit bibendum molestie mattis risus velit eu. Morbi
            consectetur ut nisi massa quam purus. Morbi mauris elementum in enim
            quis semper nisl. Cursus semper cras sit elementum turpis congue
            risus. Sed ut imperdiet vitae augue iaculis duis. Nisl sit rutrum
            sed turpis dui pretium. Fermentum lectus eu turpis mi mauris aliquam
            et facilisis. Risus at phasellus sem cum elementum molestie. Eget
            sit.
          </p>
          <Button label="Donate" type="button" size="mini" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default Donation;
