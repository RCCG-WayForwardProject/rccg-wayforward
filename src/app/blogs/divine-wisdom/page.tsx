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
          The Timelessness of Divine Wisdom
        </h1>
        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__content"]}>
            The pursuit of knowledge is ingrained in our nature, and as we
            navigate the labours and peculiarities of life, we believers are
            encouraged to turn to divine wisdom as a source of clarity and
            purpose.
          </p>
        </div>

        <p className={styles["blog-post__content"]}>
          In a world overflowing with information, divine wisdom stands as a
          beacon, offering insights beyond the grasp of human understanding.
        </p>

        <p className={styles["blog-post__content"]}>
          As we embark on this journey to unravel the layers of divine wisdom,
          we find ourselves drawn to the richness of sacred texts that have
          echoed through the ages.
        </p>

        <p className={styles["blog-post__content"]}>
          <span className={styles["blog-post__content-bold"]}>
            In James 3:17,
          </span>{" "}
          the Bible says{" "}
          <span className={styles["blog-post__content-italic"]}>
            &quot;But the wisdom that comes from heaven is first of all pure;
            then peace-loving, considerate, submissive, full of mercy and good
            fruit, impartial and sincere.&quot;
          </span>
        </p>

        <p className={styles["blog-post__content"]}>
          The book of Proverbs, often referred to as the treasure trove of
          wisdom, unfolds its verses like a roadmap to a life well-lived.
          It&apos;s a timeless guide, dispensing nuggets of truth that resonate
          with the human soul.
        </p>

        <p className={styles["blog-post__content"]}>
          <span className={styles["blog-post__content-bold"]}>
            In Proverbs 8:11,
          </span>{" "}
          wisdom is personified, depicted as more precious than rubies, and
          nothing one desires can compare with her.
        </p>

        <p className={styles["blog-post__content"]}>
          It is a force that inspires and guides creative power, shapes
          character, leading to actions that resonate with eternal principles.
        </p>

        <p className={styles["blog-post__content"]}>
          The apostle James, in his epistle, beautifully captures the essence of
          heavenly wisdom. It is not just about intellectual prowess; it is
          about embodying purity, peace, considerateness, and a heart full of
          mercy.
        </p>

        <p className={styles["blog-post__content"]}>
          <span className={styles["blog-post__content-bold"]}>
            1 Corinthians 1:25-
          </span>{" "}
          <span className={styles["blog-post__content-italic"]}>
            &quot;For the foolishness of God is wiser than human wisdom, and the
            weakness of God is stronger than human strength.&quot;
          </span>
        </p>

        <p className={styles["blog-post__content"]}>
          In a society that often values the cleverness of human intellect and
          cunning, the Bible challenges us to rethink our definition of wisdom.
        </p>

        <p className={styles["blog-post__content"]}>
          The apostle Paul, in 1 Corinthians, presents a paradigm shift by
          asserting that the foolishness of God surpasses human wisdom. It
          beckons us to recognize the limitations of our understanding and to
          seek divine insights that transcend the boundaries of our finite
          minds.
        </p>

        <p className={styles["blog-post__content"]}>
          So, where can a true believer find this elusive divine wisdom? The
          Scriptures guide us to a profound truth in{" "}
          <span className={styles["blog-post__content-bold"]}>James 1:5</span>{" "}
          which says,{" "}
          <span className={styles["blog-post__content-italic"]}>
            &quot;If any of you lacks wisdom, you should ask God, who gives
            generously to all without finding fault, and it will be given to
            you.&quot;
          </span>{" "}
          It is an open invitation to tap into a reservoir of wisdom that flows
          from the divine source.
        </p>

        <p className={styles["blog-post__content"]}>
          <span className={styles["blog-post__content-bold"]}>
            Proverbs 3:13
          </span>{" "}
          says{" "}
          <span className={styles["blog-post__content-italic"]}>
            &quot;Blessed are those who find wisdom, those who gain
            understanding.&quot;
          </span>{" "}
          This verse tells us that the pursuit of divine wisdom is not a mere
          intellectual exercise; it is a journey that leads to profound
          blessings.
        </p>

        <p className={styles["blog-post__content"]}>
          Proverbs, once again, emphasizes the blessedness of those who find
          wisdom and gain understanding. It&apos;s not about amassing knowledge
          for knowledge&apos;s sake but about unlocking the secrets that bring
          fulfillment and joy.
        </p>

        <p className={styles["blog-post__content"]}>
          As we navigate the complexities of life, divine wisdom becomes a
          guiding force that shapes our decisions, relationships, and
          perspectives.
        </p>

        <p className={styles["blog-post__content"]}>
          It is not a distant, unattainable concept; it is a gift waiting to be
          received, as{" "}
          <span className={styles["blog-post__content-bold"]}>
            Proverbs 2:6
          </span>{" "}
          tells us,{" "}
          <span className={styles["blog-post__content-italic"]}>
            &quot;For the Lord gives wisdom; from his mouth come knowledge and
            understanding.&quot;
          </span>
        </p>

        <p className={styles["blog-post__content"]}>
          <span className={styles["blog-post__content-bold"]}>
            Colossians 2:2-3
          </span>{" "}
          also underscores the importance of divine wisdom;{" "}
          <span className={styles["blog-post__content-italic"]}>
            &quot;My goal is that they may be encouraged in heart and united in
            love, so that they may have the full riches of complete
            understanding, in order that they may know the mystery of God,
            namely, Christ, in whom are hidden all the treasures of wisdom and
            knowledge.&quot;
          </span>
        </p>

        <p className={styles["blog-post__content"]}>
          The apostle Paul, in his letter to the Colossians, unravels the
          mystery of divine wisdom. It is not a detached concept but finds its
          root in Christ. In Christ, we discover the full riches of complete
          understanding. It is an invitation to intimately connect with the
          source of all wisdom and knowledge.
        </p>

        <p className={styles["blog-post__content"]}>
          In the pursuit of knowledge, let us not overlook the wellspring of
          divine wisdom that beckons us to ask, seek, and find.
        </p>

        <p className={styles["blog-post__content"]}>
          It is an invitation to partake in the profound, transformative wisdom
          that aligns our hearts with the eternal purposes woven into the very
          fabric of our existence.
        </p>

        <p className={styles["blog-post__content"]}>
          May divine wisdom continually guide our decisions and utterances in
          Jesus&apos;s mghty name,
          <br /> Amen.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
