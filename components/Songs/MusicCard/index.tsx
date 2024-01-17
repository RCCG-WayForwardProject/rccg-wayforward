import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Icon from "@/components/Icon";

import styles from "./music-card.module.scss";

type AudioDownloadType = null | "loading" | "success" | "error";
interface MusicCardProps {
  src?: string;
  name: string;
  authorName?: string;
  authorImage?: string;
  duration?: string;
  downloadable?: boolean;
  img: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  src,
  name,
  duration,
  authorImage,
  authorName,
  downloadable,
  img,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioDownloading, setAudioDownloading] =
    useState<AudioDownloadType>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const pathname = usePathname();
  const home = pathname === "/";
  const homePage = home ? "home" : "otherPages";

  const togglePlay = async () => {
    const audioElement = audioRef.current;

    if (!audioElement) {
      return;
    }

    try {
      if (isPlaying) {
        await audioElement.pause();
      } else {
        await audioElement.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error toggling play:", error);
    }
  };

  const handleDownloadAudio = async () => {
    const audioUrl = src;
    setAudioDownloading("loading");
    try {
      const response = await fetch(audioUrl!);
      const blob = await response.blob();

      const element = document.createElement("a");
      element.href = URL.createObjectURL(blob);
      element.download = `${name}.mp3`;
      element.click();
      setAudioDownloading("success");
    } catch (error) {
      console.log(error);
      setAudioDownloading("error");
    }
  };

  const isLoading = Boolean(audioDownloading === "loading");
  const error = Boolean(audioDownloading === "error");

  return (
    <div
      className={styles["music-card__wrapper"]}
      data-page={homePage}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={styles["music-card"]} data-page={homePage}>
        <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
          <source src={src} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>

        {downloadable && (
          <button
            className={styles["music-card__download-icon"]}
            type="button"
            aria-label="download-button"
            onClick={handleDownloadAudio}
          >
            {isLoading ? (
              <img src={"/images/downloading.gif"} />
            ) : (
              <Icon icon="download" />
            )}
          </button>
        )}

        <div className={styles["music-card__content-wrapper"]}>
          <div className={styles["music-card__image-mobile-column-wrapper"]}>
            <div
              className={styles["music-card__image-mobile"]}
              style={{
                backgroundImage: `url(${img})`,
              }}
              data-page={homePage}
            ></div>
            <div className={styles["music-card__name-column-wrapper"]}>
              <p className={styles["music-card__name"]} data-page={homePage}>
                {name}{" "}
              </p>
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
                <p
                  className={styles["music-card__author-name"]}
                  data-page={homePage}
                >
                  {authorName ?? "N/A"}
                </p>
              </div>
            </div>
          </div>
          <div
            className={styles["music-card__player-wrapper"]}
            data-page={homePage}
          >
            <div
              className={styles["music-card__player-icon"]}
              data-page={homePage}
            >
              <Icon icon="audioWave" />
            </div>
            <p
              className={styles["music-card__player-duration"]}
              data-page={homePage}
            >
              {duration}{" "}
            </p>
            <button
              onClick={togglePlay}
              className={styles["music-card__player-button"]}
              type="button"
              aria-label="music button"
              data-page={homePage}
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
