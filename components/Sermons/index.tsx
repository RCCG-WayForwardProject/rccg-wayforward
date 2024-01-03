import React from "react";
import Image from "next/image";

import styles from "./sermons.module.scss";

interface SermonsProps {}

const Sermons: React.FC<SermonsProps> = ({}) => {
  return (
    <section className={styles["sermons"]}>
      <div className={styles["sermons__image-wrapper"]}>
        <p className={styles["sermons__image-heading"]}>Sermons</p>
        <div className={styles["sermons__image-container"]}>
          <Image
            src={"/images/pastor_image.svg"}
            width={351}
            height={462}
            priority={false}
            loading={"lazy"}
            alt="Picture of the senior pastor"
          />
        </div>
      </div>
      <div className={styles["sermons__sermons-wrapper"]}>
        <p className={styles["sermons__sermons-heading"]}>
          Catch up on our <span>Recent Sermons</span>
        </p>
        <p className={styles["sermons__sermons-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
          accumsan hac purus volutpat ultrices. Vitae, sem dignissim vitae nunc
          aliquet integer ac suspendisse aliquet. Vulputate dictum egestas
          potenti mi amet. Aenean convallis ut vel in viverra.
        </p>
      </div>
    </section>
  );
};

export default Sermons;
