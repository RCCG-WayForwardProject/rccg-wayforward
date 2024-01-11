import React, { useState, useRef } from "react";

import styles from "./music-card.module.scss";
import Image from "next/image";
import Icon from "@/components/Icon";

interface MusicCardProps {
  src?: string;
  name: string;
  authorName?: string;
  authorImage?: string;
  duration?: string;
  img: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  src,
  name,
  duration,
  authorImage,
  authorName,
  img,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current!.play();
    } else {
      audioRef.current!.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={styles["music-card__wrapper"]}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={styles["music-card"]}>
        <audio ref={audioRef}>
          <source src={""} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <div className={styles["music-card__content-wrapper"]}>
          <p className={styles["music-card__name"]}>{name} </p>
          <div className={styles["music-card__author-wrapper"]}>
            <div>
              <Image
                src={authorImage ? authorImage : "/images/pastor_image.svg"}
                width={16}
                height={16}
                alt="author image"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <p className={styles["music-card__author-name"]}>
              {authorName ?? "N/A"}
            </p>
          </div>
          <div className={styles["music-card__player-wrapper"]}>
            <div className={styles["music-card__player-icon"]}>
              <Icon icon="audioWave" />
            </div>
            <p className={styles["music-card__player-duration"]}>{duration} </p>
            <button
              onClick={togglePlay}
              className={styles["music-card__player-button"]}
              type="button"
            >
              {isPlaying ? <Icon icon="pause" /> : <Icon icon="play" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
