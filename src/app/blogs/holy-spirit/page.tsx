"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Icon from "@/components/Icon";

import styles from "./blog.module.scss";

const BlogPost: React.FC = () => {
  const { push } = useRouter();

  const handleGoToBlogsPage = () => {
    push("/blogs");
  };

  return (
    <div className={styles["blog-post"]}>
      <button
        className={styles["blog-post__button"]}
        onClick={handleGoToBlogsPage}
      >
        <Icon icon="arrowLeftCircle" />
      </button>
      <div
        className={styles["blog-post__image"]}
        style={{ backgroundImage: `url(/images/background_image.jpg)` }}
      ></div>
      <div className={styles["blog-post__content-wrapper"]}>
        <h1 className={styles["blog-post__title"]}>
          The Endless Mercy of God: A Fountain of Forgiveness
        </h1>
        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__content"]}>
            Beloved in Christ, let us dwell today on the concept of the
            boundless mercy of God—a divine attribute that extends a merciful
            hand of forgiveness to all who seek it. It is an inexhaustible
            divine resource, and God&apos;s mercy stands as a beacon of hope,
            inviting us into a transformative experience of His unconditional
            love and forgiveness.
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            God&apos;s Merciful Nature
          </p>
          <p className={styles["blog-post__content"]}>
            The sacred Scriptures vividly paint the character of our
            compassionate and gracious Lord.{" "}
            <span className={styles["blog-post__content-bold"]}>
              Psalm 103:8{" "}
            </span>{" "}
            beautifully captures this essence, proclaiming,
            <span className={styles["blog-post__content-italic"]}>
              {" "}
              &quot;The Lord is compassionate and gracious, slow to anger,
              abounding in love.&quot; {""}
            </span>
            This encapsulates the heart of God—a compassionate, loving, and
            forgiving nature.
            <br /> <br />
            In {""}
            <span className={styles["blog-post__content-bold"]}>
              Lamentations 3:22-23, {""}
            </span>
            we find solace in the assurance that His compassions never fail, and
            they are new every morning, a testament to His unwavering love and
            mercy.
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>Divine Mercy in Action</p>
          <p className={styles["blog-post__content"]}>
            God&apos;s mercy is not merely a theological concept but a dynamic
            force at work in our lives. Jesus, through the parable of the
            prodigal son{" "}
            <span className={styles["blog-post__content-bold"]}>
              (Luke 15:11-32), {""}
            </span>
            beautifully illustrates the Father&apos;s unwavering mercy, eagerly
            welcoming back the wayward son with open arms.
            <br /> This parable paints a vivid picture of God&apos;s willingness
            to forgive and restore. Beyond that, we see God&apos;s mercy in the
            ultimate sacrifice of Christ&apos;s crucifixion for our sins. <br />{" "}
            <br />
            Nothing else can possibly dissuade us from the truth that God is on
            a mission to call His people to Himself.
            <span className={styles["blog-post__content-bold"]}>
              {""} Ephesians 2:4-5
            </span>{" "}
            emphasizes God&apos;s great love and richness in mercy, making us
            alive with Christ even when we were dead in transgressions.
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Mercy as a Transformative Force
          </p>
          <p className={styles["blog-post__content"]}>
            Beyond mere pardon, God&apos;s mercy is a transformative force that
            renews and restores us.{" "}
            <span className={styles["blog-post__content-bold"]}>
              Romans 12:2
            </span>{" "}
            urges believers to
            <span className={styles["blog-post__content-italic"]}>
              &quot;be transformed by the renewing of the mind.&quot;
            </span>
            God&apos;s mercy plays a pivotal role in this renewal, leading us to
            a life shaped by His grace.
            <br /> <br />
            In{" "}
            <span className={styles["blog-post__content-bold"]}>
              Titus 3:5,
            </span>{" "}
            the holy bible affirms that
            <span className={styles["blog-post__content-italic"]}>
              {""} &quot;He saved us not by our works but because of His mercy,
              through the washing of rebirth and renewal by the Holy
              Spirit.&quot;
            </span>
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>Divine Mercy in Action</p>
          <p className={styles["blog-post__content"]}>
            The mercy of God exposes us to many graces which we are given
            without merit. It is a free flowing gift that ebbs from the heart of
            the Almighty to His children here on earth.
          </p>
          <ul className={styles["blog-post__list-wrapper"]}>
            <li className={styles["blog-post__list"]}>
              <span className={styles["blog-post__content-bold"]}>
                Repentance and Divine Mercy:
              </span>
              <br />
              The journey to experiencing God&apos;s mercy begins with
              repentance.
              <span className={styles["blog-post__content-bold"]}>
                {""} Acts 3:19
              </span>{" "}
              reminds us of the call to repentance, turning to God, and finding
              the refreshing forgiveness that comes from the Lord.
            </li>
            <li className={styles["blog-post__list"]}>
              <span className={styles["blog-post__content-bold"]}>
                Confession and Receiving Mercy:
              </span>
              <br />
              Confession serves as a powerful key to unlocking God&apos;s mercy.
              <span className={styles["blog-post__content-bold"]}>
                {""} 1 John 1:9
              </span>{" "}
              assures us that if we confess our sins, He is faithful and just to
              forgive and purify us from all unrighteousness.
            </li>
            <li className={styles["blog-post__list"]}>
              <span className={styles["blog-post__content-bold"]}>
                Extending Mercy to Others:
              </span>
              <br />
              Perhaps, the most interesting evidence of God&apos;s mercy in
              action is the reciprocity of it. As recipients of God&apos;s
              boundless mercy, we are called to extend the same grace to others.
              <span className={styles["blog-post__content-bold"]}>
                {""} Matthew 18:21-22
              </span>{" "}
              instructs believers to{" "}
              <span className={styles["blog-post__content-italic"]}>
                {""} forgive not just seven times but seventy-seven times
              </span>{" "}
              —a demonstration of the limitless nature of mercy
              <br />
              <span className={styles["blog-post__content-bold"]}>
                {""} Colossians 3:13
              </span>{" "}
              also emphasizes the call to bear with one another and forgive,
              just as the Lord forgave us.
            </li>
          </ul>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            The Graces that God&apos;s Mercy extends to us
          </p>
          <ul className={styles["blog-post__list-wrapper"]}>
            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Freedom from Guilt and Shame:
              </span>
              <br />
              God&apos;s mercy liberates us from the burden of guilt and shame.{" "}
              <span className={styles["blog-post__content-bold"]}>
                Psalm 32:1-2
              </span>{" "}
              rejoices in the blessedness of forgiveness and the covering of
              sins, emphasizing the removal of transgressions as far as the east
              is from the west.
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Restoration of Joy and Peace:
              </span>
              <br />
              Embracing God&apos;s mercy restores joy and peace to our hearts.{" "}
              <span className={styles["blog-post__content-bold"]}>
                Isaiah 57:18
              </span>{" "}
              assures of healing and restoration for those who turn to Him.{" "}
              <span className={styles["blog-post__content-bold"]}>
                Romans 15:13
              </span>{" "}
              invokes the God of hope to fill believers with joy and peace as
              they trust in Him.
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Transformed Relationships:
              </span>
              <br />
              God&apos;s mercy not only transforms our relationship with Him but
              also impacts our interactions with others.{" "}
              <span className={styles["blog-post__content-bold"]}>
                Ephesians 4:32
              </span>{" "}
              encourages us to be kind, compassionate, and forgiving, just as
              God forgives us.{" "}
              <span className={styles["blog-post__content-bold"]}>
                Matthew 5:7{" "}
              </span>
              also highlights the blessedness of the merciful, who will receive
              mercy.
            </li>
          </ul>
        </div>

        <p className={styles["blog-post__content"]}>
          Let the mercy of God therefore be an anchor in our lives; a force that
          transforms, forgives, and restores. As we marvel at the boundless
          mercy of our Heavenly Father, may we, in turn, extend that mercy to
          those around us. Let us approach His throne with confidence, knowing
          that His mercy is inexhaustible and His forgiveness is freely given to
          all who seek it.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
