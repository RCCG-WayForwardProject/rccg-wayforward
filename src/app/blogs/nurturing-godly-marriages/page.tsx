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
          Nurturing Godly Marriages
        </h1>
        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__content"]}>
            The divine institution of marriage is a sacred covenant designed by
            God for the flourishing of human relationships. It is an umbrella
            under which chastity, unity, godliness, peace, and love are upheld.
            <br />
            The society today is plagued with alarming divorce rates which is a
            true reflection of humanity&apos;s detour from the plan of God for
            us.
            <br />
            Let us properly explore God&apos;s plan for us, and what a true
            Christian marriage should look like.
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Marriage According To Scripture
          </p>

          <ul className={styles["blog-post__list-wrapper"]}>
            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                God&apos;s Design for Companionship:
              </span>
              <br />
              The very origins of marriage are rooted in God&apos;s desire for
              companionship. In{" "}
              <span className={styles["blog-post__content-bold"]}>
                Genesis 2:18,
              </span>{" "}
              we witness the divine recognition that
              <span className={styles["blog-post__content-italic"]}>
                &quot;it is not good for the man to be alone. I will make a
                helper suitable for him.&quot;
              </span>
              <br />
              This foundational principle reveals marriage as a divine remedy
              for loneliness, reflecting God&apos;s intention for a
              companionship that complements and fulfills.
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Becoming One Flesh:
              </span>
              <br />
              The union of husband and wife is described in {""}
              <span className={styles["blog-post__content-bold"]}>
                Genesis 2:24
              </span>{" "}
              as a profound mystery: {""}
              <span className={styles["blog-post__content-italic"]}>
                &quot;That is why a man leaves his father and mother and is
                united to his wife, and they become one flesh.&quot;
              </span>
              <br />
              This oneness goes beyond physical intimacy; it encompasses a deep
              spiritual, emotional, and relational unity, echoing the unity
              Christ desires with His Church.
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Marriage as an Active Union:
              </span>
              <br />
              Love Modeled after Christ&apos;s Love for the Church:
              <span className={styles["blog-post__content-bold"]}>
                {""} Ephesians 5:25-28
              </span>{" "}
              provides a blueprint for marital love:{""}
              <span className={styles["blog-post__content-italic"]}>
                &quot;Husbands, love your wives, just as Christ loved the church
                and gave himself up for her... In this same way, husbands ought
                to love their wives as their own bodies.&quot; {""}
              </span>
              This sacrificial love reflects the selflessness and devotion
              Christ demonstrated for His Church, setting the standard for
              husbands to love their wives with an unwavering commitment.
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Submission and Mutual Respect:
              </span>
              <br />
              The concept of submission within marriage is often misunderstood.
              <span className={styles["blog-post__content-bold"]}>
                {""} Ephesians 5:22-24
              </span>{" "}
              encourages wives to submit to their husbands, but in the context
              of mutual respect and love. This submission reflects a beautiful
              dance where both partners prioritize and honor one another&apos;s
              roles, creating a harmonious partnership.
            </li>
          </ul>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Navigating Marital Challenges through Godly Principles
          </p>
          <p className={styles["blog-post__content"]}>
            In marriage, as in any human relationship, there are bound to be
            challenges and differences. However, as Christians, these
            differences should not cause us to grow apart, but rather seek
            understanding of our partners to better foster the institution of
            marriage. Marital challenges can be effectively overcome by the
            following:
          </p>
          <ul className={styles["blog-post__list-wrapper"]}>
            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Communication as a Pillar of Unity:
              </span>
              <br />
              Effective communication is vital in any marriage.{" "}
              <span className={styles["blog-post__content-bold"]}>
                Proverbs 18:21
              </span>{" "}
              wisely states,
              <span className={styles["blog-post__content-italic"]}>
                &quot;The tongue has the power of life and death.&quot;
              </span>
              <br />
              Words spoken in love and wisdom build bridges, fostering
              understanding and unity
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Forgiveness and Grace:
              </span>
              <br />
              <span className={styles["blog-post__content-bold"]}>
                Colossians 3:13
              </span>{" "}
              emphasizes the importance of forgiveness within the marital
              relationship:{""}
              <span className={styles["blog-post__content-italic"]}>
                &quot;Bear with each other and forgive one another if any of you
                has a grievance against someone. Forgive as the Lord forgave
                you.&quot;
              </span>
              <br />
              As recipients of God&apos;s grace, spouses are called to extend
              that grace to one another, cultivating an environment of healing
              and restoration.
            </li>
          </ul>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            God&apos;s Purpose for Marriage
          </p>
          <p className={styles["blog-post__content"]}>
            Marriage was instituted by the Almighty to give us an avenue in
            which to explore romantic and emotional relationships whole
            upholding Christian values and virtues. As such, we should all
            strive to align with God&apos;s plan and purpose for marriage.
          </p>
          <ul className={styles["blog-post__list-wrapper"]}>
            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                The Sanctity of Family:
              </span>
              <br />
              God places a high value on the family unit.{" "}
              <span className={styles["blog-post__content-bold"]}>
                Proverbs 22:6
              </span>{" "}
              instructs,
              <span className={styles["blog-post__content-italic"]}>
                &quot;Start children off on the way they should go, and even
                when they are old they will not turn from it.&quot;
              </span>
              <br />
              God&apos;s design for marriage includes the responsibility of
              nurturing and guiding the next generation in His ways.
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                A Reflection of Christ and the Church:
              </span>
              <br />
              The marital union is intended to mirror the profound relationship
              between Christ and His Church. As spouses reflect Christ&apos;s
              love, commitment, and sacrificial nature, they embody a living
              testimony of God&apos;s redemptive love for us.
            </li>
          </ul>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            The Blessings of a Godly Marriage
          </p>
          <ul className={styles["blog-post__list-wrapper"]}>
            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Joy and Fulfillment:
              </span>
              <br />
              <span className={styles["blog-post__content-bold"]}>
                Psalm 128:3
              </span>{" "}
              beautifully captures the blessings of a God-fearing marriage: {""}
              <span className={styles["blog-post__content-italic"]}>
                &quot;Your wife will be like a fruitful vine within your house;
                your children will be like olive shoots around your table.&quot;
              </span>
              <br />
              The imagery speaks of abundance, joy, and fulfillment within the
              sanctuary of a Godly home.
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Strength in Unity:
              </span>
              <br />
              <span className={styles["blog-post__content-bold"]}>
                Ecclesiastes 4:9
              </span>{" "}
              outlines the strength found in marital unity: {""}
              <span className={styles["blog-post__content-italic"]}>
                &quot;Two are better than one because they have a good return
                for their labor.&quot;
              </span>
              A united front in marriage not only multiplies effectiveness but
              provides mutual support in facing life&apos;s challenges.
            </li>
          </ul>
        </div>

        <p className={styles["blog-post__content"]}>
          As believers, God commands us to honor and cherish the divine gift of
          marriage.
          <br />
          As we embrace God&apos;s design for marriage, may our unions become
          beacons of hope and examples of the profound beauty found in the
          sacred covenant established by our Heavenly Father.
          <br /> Amen.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
