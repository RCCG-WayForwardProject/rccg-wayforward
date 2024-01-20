import React from "react";
import Image from "next/image";

import styles from "./profile.module.scss";

const PastorProfile: React.FC = () => {
  return (
    <div className={styles["profile__wrapper"]}>
      <div className={styles["profile__image"]}>
        <Image
          src={"/images/pastor_and_wife.jpg"}
          alt="Image of pastor with wife"
          fill
        />
      </div>

      <div className={styles["profile__content-wrapper"]}>
        <h1 className={styles["profile__content-heading"]}>Meet Our Pastor</h1>
        <p className={styles["profile__content"]}>
          Thanks for dedicating a few moments to explore our website. As you
          navigate through, discover opportunities to connect with God,
          cultivate community, and contribute to the well-being of others at
          WayForward Cathedral.
        </p>
        <br />
        <p className={styles["profile__content"]}>
          At WayForward, our mission is to help you connect with God and find a
          place where you can grow in community. We believe that true
          fulfillment comes from serving others and making a positive difference
          in the world. As your pastor, my wife and I are here because we have a
          deep love for God and people. It&apos;s our heartfelt desire to see
          lives transformed by the power and love of God. Witnessing the
          incredible ways in which God changes lives brings us immeasurable joy.
        </p>
        <br />
        <p className={styles["profile__content"]}>
          We invite you to join us at WayForward Cathedral, where you&apos;ll
          find a warm and welcoming community. Come and experience the
          transformative power of God&apos;s presence and the support of a
          faith-filled family.
          <br />
          During your visit, please make sure to stop by and introduce yourself.
          We would love to personally meet you, answer any questions you may
          have, and assist you in any way possible.
        </p>
        <br />
        <p className={styles["profile__content"]}>
          May the Lord bless you and keep you. May His face shine upon you and
          be gracious to you. May He lift up His countenance upon you and give
          you peace. We look forward to the privilege of welcoming you to
          WayForward Cathedral.
        </p>
      </div>
    </div>
  );
};

export default PastorProfile;
