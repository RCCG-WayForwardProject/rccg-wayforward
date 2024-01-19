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
          Embracing the Transformative Power of the Holy Spirit
        </h1>
        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__content"]}>
            Dearly beloved in Christ, let us for a moment explore the profound
            and life-changing reality of the Holy Spirit. As believers, we are
            blessed with the presence and guidance of the Holy Spirit, a divine
            companion and source of power that empowers us to live victoriously
            as followers of Jesus Christ. The Holy Spirit was promised to the
            apostles as Christ&apos;s journey here on earth drew to a close.
            Christ promised to send The Paraclete, The Comforter, who would come
            down to help the early Christians navigate their spiritual journey.
            It is therefore integral to the Christian journey to understand the
            Holy Spirit.
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Understanding the Holy Spirit
          </p>
          <p className={styles["blog-post__content"]}>
            The Holy Spirit is a central figure in the Christian faith, often
            referred to as the third person of the Holy Trinity, alongside God
            the Father and Jesus Christ the Son. In{" "}
            <span className={styles["blog-post__content-bold"]}>
              John 14:16-17,{" "}
            </span>{" "}
            Jesus introduces the Holy Spirit to His disciples, saying,
            <span className={styles["blog-post__content-italic"]}>
              {" "}
              &quot;And I will ask the Father, and he will give you another
              advocate to help you and be with you forever—the Spirit of
              truth.&quot; {""}
            </span>
            <br /> <br />
            On the day of Pentecost, when the apostles were huddled up in the
            upper room, afraid to go out and proclaim the Gospel of Christ
            Jesus, the descent of the Holy Spirit upon them emboldened them to
            take charge of their Christian mandate and proclaim Christ
            throughout the world.
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            The Comforter and Advocate
          </p>
          <p className={styles["blog-post__content"]}>
            The Holy Spirit is our Comforter and Advocate, providing solace,
            guidance, and interceding on our behalf. In moments of distress or
            uncertainty, we can find refuge in the comforting presence of the
            Holy Spirit. In{" "}
            <span className={styles["blog-post__content-bold"]}>
              John 15:26, {""}
            </span>
            <span className={styles["blog-post__content-italic"]}>
              &quot;When the Advocate comes, whom I will send to you from the
              Father—the Spirit of truth who goes out from the Father—he will
              testify about me.&quot;
            </span>{" "}
            <br />
            As an advocate, the Holy Spirit speaks and intercedes for us where
            our prayers and supplications fall short.
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Empowerment for Christian Living
          </p>
          <p className={styles["blog-post__content"]}>
            The Holy Spirit empowers believers to live a life aligned with
            God&apos;s will. In{" "}
            <span className={styles["blog-post__content-bold"]}>Acts 1:8,</span>{" "}
            Jesus promises power through the Holy Spirit, saying,
            <span className={styles["blog-post__content-italic"]}>
              &quot;But you will receive power when the Holy Spirit comes on
              you, and you will be my witnesses in Jerusalem, and in all Judea
              and Samaria, and to the ends of the earth.&quot;
            </span>
            The Holy Spirit also gives us characteristics which we are to embody
            to live the true Christian life.
            <br /> <br />
            In{" "}
            <span className={styles["blog-post__content-bold"]}>
              Galatians 5:22-23,
            </span>{" "}
            the scripture tells us,
            <span className={styles["blog-post__content-italic"]}>
              {" "}
              &quot;But the fruit of the Spirit is love, joy, peace,
              forbearance, kindness, goodness, faithfulness, gentleness, and
              self-control. Against such things, there is no law.&quot;{" "}
            </span>
            This simply implies that with the Holy Spirit, living a Christian
            life is infinitely easier. We need the Spirit of God in us to become
            more like God.
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Guidance and Illumination
          </p>
          <p className={styles["blog-post__content"]}>
            The Holy Spirit serves as our spiritual guide, illuminating the
            Scriptures and helping us discern God&apos;s purpose for our lives.
            In{" "}
            <span className={styles["blog-post__content-bold"]}>
              John 16:13,
            </span>{" "}
            Jesus assures us,
            <span className={styles["blog-post__content-italic"]}>
              &quot;But when he, the Spirit of truth, comes, he will guide you
              into all the truth.&quot;
            </span>
            <br /> <br />
            In{" "}
            <span className={styles["blog-post__content-bold"]}>
              Corinthians 2:10-12
            </span>{" "}
            says,
            <span className={styles["blog-post__content-italic"]}>
              {" "}
              &quot;The Spirit searches all things, even the deep things of
              God... We have not received the spirit of the world but the Spirit
              who is from God, that we may understand what God has freely given
              us.&quot;{" "}
            </span>
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>Gifts of the Holy Spirit</p>
          <p className={styles["blog-post__content"]}>
            The Holy Spirit bestows spiritual gifts upon believers for the
            edification of the body of Christ. These gifts vary and may include
            wisdom, knowledge, faith, healing, discernment, prophecy, and more.{" "}
            <br />
            These gifts help us to be witnesses for Christ, aiding our efforts
            in Christ&apos;s ministry.
            <span className={styles["blog-post__content-bold"]}>
              {" "}
              1 Corinthians 12:7-11
            </span>{" "}
            tells us,
            <span className={styles["blog-post__content-italic"]}>
              &quot;Now to each one, the manifestation of the Spirit is given
              for the common good... All these are the work of one and the same
              Spirit, and he distributes them to each one, just as he
              determines.&quot;
            </span>
          </p>
        </div>

        <div className={styles["blog-post__content-container"]}>
          <p className={styles["blog-post__title"]}>
            Embracing the Holy Spirit in Everyday Life
          </p>
          <p className={styles["blog-post__content"]}>
            As we navigate the complexities of daily life, it is important to
            actively embrace the Holy Spirit and allow His transformative power
            to shape our character and actions. We can invite the Holy Spirit
            into our lives in these ways:
          </p>
          <ul className={styles["blog-post__list-wrapper"]}>
            <li className={styles["blog-post__list"]}>
              <span className={styles["blog-post__content-bold"]}>
                Prayer and Communion:
              </span>
              <br />
              Cultivate a habit of prayer and communion with the Holy Spirit.
              Seek His guidance, share your joys and concerns, and invite Him
              into every aspect of your life. In
              <span className={styles["blog-post__content-bold"]}>
                {""} Romans 8:26,
              </span>{" "}
              Paul reminds us,
              <span className={styles["blog-post__content-italic"]}>
                &quot;In the same way, the Spirit helps us in our weakness. We
                do not know what we ought to pray for, but the Spirit himself
                intercedes for us through wordless groans.&quot;
              </span>{" "}
            </li>
            <li className={styles["blog-post__list"]}>
              <span className={styles["blog-post__content-bold"]}>
                Listening to the Spirit:
              </span>
              <br />
              Practice listening to the promptings of the Holy Spirit. Be
              attuned to His gentle whispers, leading and guiding you in
              alignment with God&apos;s perfect will. As Jesus said in
              <span className={styles["blog-post__content-bold"]}>
                {""} John 16:13,
              </span>{" "}
              <span className={styles["blog-post__content-italic"]}>
                &quot;He will not speak on his own; he will speak only what he
                hears, and he will tell you what is yet to come.&quot;
              </span>{" "}
            </li>
            <li className={styles["blog-post__list"]}>
              <span className={styles["blog-post__content-bold"]}>
                Walking in the Fruit of the Spirit:
              </span>
              <br />
              Purposefully live in accordance with the fruit of the Spirit as
              outlined in
              <span className={styles["blog-post__content-bold"]}>
                {""} Galatians 5:22-23.
              </span>{" "}
              <span className={styles["blog-post__content-italic"]}>
                &quot;Let love, joy, peace, patience, kindness, goodness,
                faithfulness, gentleness, and self-control characterize your
                interactions with others&quot;.
              </span>{" "}
            </li>
            <li className={styles["blog-post__list"]}>
              <span className={styles["blog-post__content-bold"]}>
                Utilizing Spiritual Gifts:
              </span>
              <br />
              Discover and utilize the spiritual gifts the Holy Spirit has
              bestowed upon you. Whether it be serving, teaching, encouraging,
              or other gifts, employ them for the edification of the body of
              Christ.
            </li>
          </ul>
        </div>

        <p className={styles["blog-post__content"]}>
          Dear brothers and sisters, the Holy Spirit is not a distant force but
          a dynamic and intimate presence in our lives. Embrace His guidance,
          power, and transformative influence. As we delve into the riches of
          the Holy Spirit, we find ourselves equipped for victorious Christian
          living, radiating the love and light of Christ in a world in need. May
          the Holy Spirit continue to empower and guide us on our remarkable
          journey of faith.
          <br /> Amen.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
