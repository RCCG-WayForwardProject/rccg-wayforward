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
          Chastity: A Sacred Call to Holiness and Purity
        </h1>
        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__content"]}>
            Beloved in Christ, let us explore the spiritual significance of the
            divine virtue of Chastity. In a world that often glorifies
            self-indulgence and instant gratification, the call to embrace
            chastity is a counter-cultural and transformative journey towards
            holiness and purity. Chastity is more than mere avoidance of
            physical intimacy; it is a virtue deeply rooted in the biblical
            understanding of purity and righteousness. It encompasses not only
            our actions but also our thoughts, words, intentions, and the manner
            in which we express love and intimacy.
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Biblical Foundation of Chastity
          </p>
          <p className={styles["blog-post__content"]}>
            The Bible offers invaluable pages of teachings on chastity,
            emphasizing its significance in the lives of believers. In{" "}
            <span className={styles["blog-post__content-bold"]}>
              1 Thessalonians 4:3-5,{" "}
            </span>{" "}
            the apostle Paul writes,
            <span className={styles["blog-post__content-italic"]}>
              {" "}
              &quot;It is God’s will that you should be sanctified: that you
              should avoid sexual immorality; that each of you should learn to
              control your own body in a way that is holy and honorable, not in
              passionate lust like the pagans, who do not know God.&quot;
            </span>
            <br /> <br />
            <span className={styles["blog-post__content-bold"]}>
              Hebrews 13:4 -
            </span>
            &quot;Marriage should be honored by all, and the marriage bed kept
            pure, for God will judge the adulterer and all the sexually
            immoral.&quot;
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Chastity in Thought and Deed
          </p>
          <p className={styles["blog-post__content"]}>
            Chastity is not confined to physical actions, but extends to the
            realm of our thoughts and desires. Jesus, in{" "}
            <span className={styles["blog-post__content-bold"]}>
              Matthew 5:28{" "}
            </span>
            underscores the importance of purity of heart, when he tells us,{" "}
            <span className={styles["blog-post__content-italic"]}>
              &quot;But I tell you that anyone who looks at a woman lustfully
              has already committed adultery with her in his heart.&quot;
            </span>
            This outlines the need to guide our thoughts as well as our actions.{" "}
            <br /> <br />
            We have the scriptures in{" "}
            <span className={styles["blog-post__content-bold"]}>
              Philippians 4:8
            </span>{" "}
            to guide us;{" "}
            <span className={styles["blog-post__content-italic"]}>
              &quot;Finally, brothers and sisters, whatever is true, whatever is
              noble, whatever is right, whatever is pure, whatever is lovely,
              whatever is admirable—if anything is excellent or
              praiseworthy—think about such things.&quot;
            </span>
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Chastity and Christian Relationships
          </p>
          <p className={styles["blog-post__content"]}>
            Chastity plays a crucial role in the context of Christian
            relationships, whether in courtship or marriage.{" "}
            <span className={styles["blog-post__content-bold"]}>
              Ephesians 5:3
            </span>{" "}
            implores believers,
            <span className={styles["blog-post__content-italic"]}>
              &quot;But among you there must not be even a hint of sexual
              immorality, or of any kind of impurity, or of greed, because these
              are improper for God’s holy people.&quot;
            </span>
            <br /> <br />
            In{" "}
            <span className={styles["blog-post__content-bold"]}>
              1 Corinthians 6:18-20,
            </span>{" "}
            we are admonished to{" "}
            <span className={styles["blog-post__content-italic"]}>
              &quot;Flee from sexual immorality. All other sins a person commits
              are outside the body, but whoever sins sexually, sins against
              their own body... You are not your own; you were bought at a
              price. Therefore, honor God with your bodies.&quot;
            </span>
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>Chastity in Action</p>
          <p className={styles["blog-post__content"]}>
            Now that we&apos;ve laid the scriptural foundation, let&apos;s delve
            into practical ways to embrace chastity in our daily christian
            lives. <br /> We can stove towards chastity by practicing the
            following:
          </p>
          <ul className={styles["blog-post__list-wrapper"]}>
            <li className={styles["blog-post__list"]}>
              Guarding the Mind: <br /> Begin by guarding your mind against
              impure thoughts. Fill your mind with wholesome, uplifting content,
              and be intentional about avoiding situations that may lead to
              temptation.
            </li>
            <li className={styles["blog-post__list"]}>
              Practicing Self-Control:
              <br /> Chastity calls for the cultivation of self-control. Develop
              the discipline to resist impulses and temptations, remembering
              that the Holy Spirit provides strength to overcome any challenge.
            </li>
            <li className={styles["blog-post__list"]}>
              Choosing Godly Entertainment: <br /> Be mindful of the media and
              entertainment you consume. Opt for content that aligns with
              biblical principles, promoting purity and godliness in both
              visuals and messages.
            </li>
            <li className={styles["blog-post__list"]}>
              Building Accountability:
              <br /> Surround yourself with like-minded believers who can offer
              support and accountability. Share your struggles and victories,
              fostering a community that encourages each other on the journey of
              chastity.
            </li>
            <li className={styles["blog-post__list"]}>
              Establishing Boundaries:
              <br /> In relationships, establish clear boundaries that honor God
              and promote chastity. Communicate openly with your partner,
              ensuring mutual understanding and commitment to living in
              accordance with God&apos;s design for intimacy.
            </li>
          </ul>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Embracing the Benefits of Chastity
          </p>
          <p className={styles["blog-post__content"]}>
            Chastity is not a restrictive set of rules but a pathway to abundant
            life and spiritual well-being. Like the various other Christian
            virtues, there are benefits to be obtained from living a life of
            Chastity.
          </p>
          <ul className={styles["blog-post__list-wrapper"]}>
            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Spiritual Intimacy with God:
              </span>
              <br />
              Chastity fosters a deepened spiritual intimacy with God. By
              aligning our lives with His principles, we draw closer to the
              source of true fulfillment and joy. Scriptural Reference:{" "}
              <span className={styles["blog-post__content-bold"]}>
                Psalm 24:3-4 (NIV) -
              </span>{" "}
              <span className={styles["blog-post__content-italic"]}>
                &quot;Who may ascend the mountain of the Lord? Who may stand in
                his holy place? The one who has clean hands and a pure heart,
                who does not trust in an idol or swear by a false god.&quot;
              </span>
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Healthy Relationships:
              </span>
              <br />
              Chastity contributes to the development of healthy and
              God-honoring relationships. It fosters trust, mutual respect, and
              a foundation built on shared values. <br />
              Scriptural Reference:{" "}
              <span className={styles["blog-post__content-bold"]}>
                1 Corinthians 13:4-7 (NIV) -
              </span>{" "}
              <span className={styles["blog-post__content-italic"]}>
                &quot;Love is patient, love is kind. It does not envy, it does
                not boast, it is not proud... It always protects, always trusts,
                always hopes, always perseveres.&quot;
              </span>
            </li>

            <li className={styles["blog-post__list-number"]}>
              <span className={styles["blog-post__content-bold"]}>
                Emotional Well-being:
              </span>
              <br />
              Living a chaste life promotes emotional well-being, reducing the
              potential for heartbreak, guilt, and regret. It allows for the
              cultivation of lasting and fulfilling connections.
              <br />
              Scriptural Reference:{" "}
              <span className={styles["blog-post__content-bold"]}>
                Proverbs 4:23 (NIV) -
              </span>{" "}
              <span className={styles["blog-post__content-italic"]}>
                &quot;Above all else, guard your heart, for everything you do
                flows from it.&quot;
              </span>
            </li>
          </ul>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Honoring God&apos;s Design for Intimacy:
          </p>
          <p className={styles["blog-post__content"]}>
            Chastity is a testament to honoring God&apos;s design for intimacy.
            It recognizes that the gift of physical and emotional intimacy is
            sacred and best experienced within the confines of His divine plan.
            <br />
            God in His infinite wisdom therefore created the gift of matrimony;{" "}
            <span className={styles["blog-post__content-italic"]}>
              &quot;That is why a man leaves his father and mother and is united
              to his wife, and they become one flesh.&quot;
            </span>
            <br /> <br />
            Brothers and sisters in Christ, the transformative effects of
            chastity are those that lead us closer to the heart of God. Through
            the guidance of the Holy Spirit and the wisdom found in God&apos;s
            Word, we can navigate the challenges of living in a world that often
            opposes the principles of purity and holiness.
            <br />
            <br /> May the call to embrace chastity resonate in our hearts,
            prompting us to seek God&apos;s strength and grace in this sacred
            endeavor. Let us strive for purity in thought, word, and deed,
            knowing that in our pursuit of holiness, we draw closer to the One
            who is pure and holy, our Lord and Savior, Jesus Christ.
            <br /> Amen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
